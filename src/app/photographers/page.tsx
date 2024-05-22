import Link from "next/link";
import { $path } from "next-typesafe-url";

import { createUpdateCurrentUser } from "~/data/user-dto";
import { PhotoUploader } from "~/components/photo-uploader";

export default async function ClaimCodePage() {
  await createUpdateCurrentUser();

  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        push your photos here
      </h1>
      <PhotoUploader />
      <Link
        href={$path({ route: "/" })}
        className="bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white"
      >
        Must be logged in here
      </Link>
    </div>
  );
}
