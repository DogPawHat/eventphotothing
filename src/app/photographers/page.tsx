import Link from "next/link";
import Image from "next/image";
import { $path } from "next-typesafe-url";

import { PhotoUploader } from "~/components/photo-uploader";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {images.map((image) => (
        <div key={image.id} className="flex h-48 w-48 flex-col">
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              style={{ objectFit: "contain" }}
              width={192}
              height={192}
              alt={image.name}
            />
          </Link>
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function ClaimCodePage() {

  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
      <div className="flex flex-wrap justify-center gap-4 p-4">
        <Images />
      </div>
      <PhotoUploader />
      <Link href={$path({ route: "/" })}>Must be logged in here</Link>
    </div>
  );
}
