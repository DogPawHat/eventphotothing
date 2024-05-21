import { ChevronRightIcon } from "lucide-react";
import { $path } from "next-typesafe-url";
import Link from "next/link";

import { redirect } from "next/navigation";
import { ClaimCodeForm } from "~/components/claim-code-form";

export default function HomePage() {
  async function handleClaim(formdata: FormData) {
    "use server";

    const claimCode = formdata.get("claimCode");
    if (typeof claimCode !== "string") {
      return;
    }

    redirect(
      $path({
        route: "/claim/[code]",
        routeParams: { code: claimCode },
      }),
    );
  }

  return (
    <>
      <section className="container max-w-3xl space-y-6 py-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
            Claim Your Photos
          </h1>
        </div>
        <form
          action={handleClaim}
          className="flex items-center justify-center space-x-2"
        >
          <ClaimCodeForm />
        </form>
      </section>
      <div>
        <Link
          href="/photographers"
          className="inline-flex items-center text-white"
        >
          Photographers section
          <ChevronRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </>
  );
}
