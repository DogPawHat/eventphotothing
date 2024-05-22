import "server-only";
import { auth } from "@clerk/nextjs/server";

import e from "~~/dbschema/edgeql-js";

import { client } from "./client";

export async function createUpdateCurrentUser() {
  const { userId } = auth().protect();

  const insertResult = e
    .insert(e.Photographer, {
      clerk_id: userId,
    })
    .unlessConflict((p) => ({
      on: p.clerk_id,
    })).clerk_id;

  const res = await insertResult.run(client);

  return res;
}
