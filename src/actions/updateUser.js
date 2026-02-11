"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updateProfile(formValues) {
  const session = await auth();

  const userId = session.user.id;

  const preferred_name = formValues.get("preferred_name");
  const country = formValues.get("country");
  const age = formValues.get("age");
  const favourite_game = formValues.get("favourite_game");
  const inspo_quote = formValues.get("inspo_quote");

  await db.query(
    `INSERT INTO userinfo (preferred_name, country, age, favourite_game, inspo_quote, user_id) VALUES ($1, $2, $3, $4, $5, $6) ON CONFLICT (user_id) DO UPDATE SET preferred_name = EXCLUDED.preferred_name, country = EXCLUDED.country, age = EXCLUDED.age, favourite_game = EXCLUDED.favourite_game, inspo_quote = EXCLUDED.inspo_quote`,
    [preferred_name, country, age, favourite_game, inspo_quote, userId],
  );

  revalidatePath(`/profile/${userId}`);

  redirect(`/profile/${userId}`);
  //   return { success: true };
}
