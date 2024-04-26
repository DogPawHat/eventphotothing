import Link from "next/link";

export default function ClaimCodePage(props: { params: { code: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          foto foto foto
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl">
          Your claim code is {props.params.code}.
        </p>
        <Link
          href="/"
          className="bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white text-white"
        >
          Home
        </Link>
      </div>
    </main>
  );
}
