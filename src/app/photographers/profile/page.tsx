import { UserProfile } from "@clerk/nextjs";
import { $path } from "next-typesafe-url";

export default function Page() {
  return (
    <UserProfile
      path={$path({ route: '/photographers/profile' })}
    />
  );
}
