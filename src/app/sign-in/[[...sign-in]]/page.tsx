import { SignIn } from "@clerk/nextjs";
import { $path } from "next-typesafe-url";

export default function Page() {
  return (
    <SignIn
      path={$path({
        route: "/sign-in/[[...sign-in]]",
        routeParams: { },
      })}
    />
  );
}
