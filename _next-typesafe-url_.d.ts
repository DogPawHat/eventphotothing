// This file is generated by next-typesafe-url
// Do not edit this file directly.

// @generated
// prettier-ignore
/* eslint-disable */


declare module "@@@next-typesafe-url" {
  import type { InferRoute, StaticRoute } from "next-typesafe-url";
  
  interface DynamicRouter {
    "/claim/[code]": InferRoute<import("./src/app/claim/[code]/routeType").RouteType>;
    "/sign-in/[[...sign-in]]": InferRoute<import("./src/app/sign-in/[[...sign-in]]/routeType").RouteType>;
    "/sign-up/[[...sign-up]]": InferRoute<import("./src/app/sign-up/[[...sign-up]]/routeType").RouteType>;
  }

  interface StaticRouter {
    "/": StaticRoute;
    "/photographers": StaticRoute;
    "/photographers/profile": StaticRoute;
  }
}
