import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import e from "~~/dbschema/edgeql-js";

import { client } from "~/data/client";
const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    // Set permissions and file types for this FileRoute
    .middleware(async ({}) => {
      // This code runs on your server before upload
      let user: ReturnType<ReturnType<typeof auth>["protect"]>;

      try {
        user = auth().protect();
      } catch (e) {
        throw new UploadThingError("Unauthorized");
      }

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: user.userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId);

      console.log("file url", file.url);

      try {
        const selectPhotographer = e.select(e.Photographer, () => ({
          filter_single: {
            clerk_id: metadata.userId,
          },
        }));

        const insertPhoto = e.insert(e.Photo, {
          file_key: file.key,
          photographer: selectPhotographer,
          is_claimed: false,
        });

        const selectPhoto = e.select(insertPhoto, () => ({
          id: true,
          file_key: true,
        }));

        const selectPhotoResult = await selectPhoto.run(client);

        return {
          uploadedBy: metadata.userId,
          fileId: selectPhotoResult.id,
          fileKey: selectPhotoResult.file_key,
        };
      } catch (e) {
        console.log(e);
        throw new UploadThingError({
          message: "File not saved to db",
          code: "INTERNAL_SERVER_ERROR",
          cause: e as Error,
        });
      }
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
