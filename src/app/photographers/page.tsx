import Link from "next/link";
import { $path } from "next-typesafe-url";

export default function ClaimCodePage() {
  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        push your photos here
      </h1>
      <Link
        href={$path({ route: "/" })}
        className="bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white"
      >
        Must be logged in here
      </Link>
    </div>
  );
}
