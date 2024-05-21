import Link from "next/link";
import { $path } from "next-typesafe-url";

export default function ClaimCodePage(props: { params: { code: string } }) {
  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        foto foto foto
      </h1>
      <p className="text-lg text-gray-500 dark:text-gray-400 md:text-xl">
        Your claim code is {props.params.code}.
      </p>
      <Link
        href={$path({ route: "/" })}
        className="bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white"
      >
        Home
      </Link>
    </div>
  );
}
