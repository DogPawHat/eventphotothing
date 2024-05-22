"use client";

import { UploadDropzone } from "~/lib/uploadthing";

export function PhotoUploader() {
  return (
    <UploadDropzone
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        // Do something with the response
        console.log("Files: ", res);
        alert("Upload Completed");
      }}
      onUploadError={(error: Error) => {
        // Do something with the error.
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
}
