import { db } from "@/db";
import { notFound } from "next/navigation";

export default async function ProfilePage({ params }) {
  const userId = params.userid;

  const profileQuery = await db.query(`SELECT * FROM users WHERE id =$1`, [
    userId,
  ]);
  console.log(profileQuery);

  if (profileQuery.rows.length === 0) {
    notFound();
  }

  const profile = profileQuery.rows[0];
  console.log(profile);

  const postQuery = await db.query(
    `SELECT preferred_name, country, age, favourite_game, inspo_quote FROM userinfo WHERE user_id=$1`,
    [userId],
  );
  console.log(postQuery);
  const userInfo = postQuery.rows[0] || {};

  return (
    <>
      <div className="max-w-screen-lg mx-auto p-4 bg-zinc-300 mt-10 rounded-xl">
        <h1 className="text-3xl mb-4">{profile.name}s Profile</h1>
        <div className="space-y-2">
          <h2 className="bg-zinc-100 px-3 py-2 rounded">
            Preferred Name: {userInfo.preferred_name}
          </h2>
          <h2 className="bg-zinc-100 px-3 py-2 rounded">
            Country: {userInfo.country}
          </h2>
          <h2 className="bg-zinc-100 px-3 py-2 rounded">Age: {userInfo.age}</h2>
          <h2 className="bg-zinc-100 px-3 py-2 rounded">
            Favourite Game: {userInfo.favourite_game}
          </h2>
          <h2 className="bg-zinc-100 px-3 py-2 rounded">
            Inspirational Quote: {userInfo.inspo_quote}
          </h2>
        </div>
        <a
          href={`/profileupdate/${userId}`}
          className="inline-block bg-green-400 px-4 py-2 text-xl mt-4 text-black rounded"
        >
          Edit Profile
        </a>
      </div>
    </>
  );
}
