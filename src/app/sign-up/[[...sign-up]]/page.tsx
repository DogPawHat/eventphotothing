import { SignUp } from "@clerk/nextjs";
import { $path } from "next-typesafe-url";

export default function Page() {
  return (
    <SignUp
      path={$path({ route: "/sign-up/[[...sign-up]]", routeParams: {} })}
    />
  );
}
