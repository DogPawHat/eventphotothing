import { type DynamicRoute } from "next-typesafe-url";
import { z } from "zod";

export const Route = {
  routeParams: z.object({
    'sign-up': z.string().optional(),
  }),
} satisfies DynamicRoute;
export type RouteType = typeof Route;
