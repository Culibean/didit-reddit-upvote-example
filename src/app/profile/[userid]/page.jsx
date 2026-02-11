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
      <div>
        <h1>{profile.name}s Profile</h1>
        <div>
          <h2>Preferred Name: {userInfo.preferred_name}</h2>
          <h2>Country: {userInfo.country}</h2>
          <h2>Age: {userInfo.age}</h2>
          <h2>Favourite Game: {userInfo.favourite_game}</h2>
          <h2>Inspirational Quote: {userInfo.inspo_quote}</h2>
        </div>
        <a
          href={`/profileupdate/${userId}`}
          className="bg-pink-300 text-black px-4 py-2 rounded w-full"
        >
          Edit Profile
        </a>
      </div>
    </>
  );
}
