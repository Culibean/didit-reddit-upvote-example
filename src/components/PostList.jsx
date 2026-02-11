import Link from "next/link";
import { Pagination } from "./Pagination";
import { Vote } from "./Vote";
import { db } from "@/db";
import { POSTS_PER_PAGE } from "@/config";
import { GrRestaurant } from "react-icons/gr";
import { Odor_Mean_Chey } from "next/font/google";

export async function PostList({ currentPage = 1, searchParams }) {
  // TODO: add option to sort posts by date and votes

  let dateOrder = "vote_total DESC";

  if (searchParams?.sort === "date_desc") {
    dateOrder = "diditposts.created_at DESC";
  } else if (searchParams?.sort === "date_asc") {
    dateOrder = "diditposts.created_at ASC";
  } else if (searchParams?.sort === "controversial") {
    dateOrder = "controversy DESC";
  }

  const { rows: posts } =
    await db.query(`SELECT diditposts.id, diditposts.title, diditposts.body, diditposts.created_at, users.name, 
    COALESCE(SUM(votes.vote), 0) AS vote_total,
    COALESCE(ABS(SUM(votes.vote)), 0) AS controversy
     FROM diditposts
     JOIN users ON diditposts.user_id = users.id
     LEFT JOIN votes ON votes.post_id = diditposts.id
     GROUP BY diditposts.id, users.name
     ORDER BY ${dateOrder}
     LIMIT ${POSTS_PER_PAGE}
     OFFSET ${POSTS_PER_PAGE * (currentPage - 1)}`);

  // const queryString = (await searchParams) || {};

  // posts.forEach((item) => {
  //   item.created_at = new Date(item.created_at);
  // });

  // if (queryString.sort === "date_desc") {
  //   posts.sort((a, b) => b.created_at - a.created_at);
  // } else if (queryString.sort === "date_asc") {
  //   posts.sort((a, b) => a.created_at - b.created_at);
  // }
  // console.log(posts);

  return (
    <>
      {/* TODO: Add sorting buttons to page */}
      <section className="flex justify-center gap-4 mt-6">
        <Link
          className="bg-pink-300 text-black px-3 py-2 rounded"
          href="/?sort=date_desc"
        >
          {" "}
          Newest first{""}
        </Link>
        <Link
          className="bg-pink-300 text-black px-3 py-2 rounded"
          href="/?sort=top"
        >
          {" "}
          Top Posts{""}
        </Link>

        <Link
          className="bg-pink-300 text-black px-3 py-2 rounded"
          href="/?sort=controversial"
        >
          {" "}
          Hot Topics{""}
        </Link>
      </section>
      <ul className="max-w-screen-lg mx-auto p-4 mb-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className=" py-4 flex space-x-6 hover:bg-zinc-200 rounded-lg"
          >
            <Vote postId={post.id} votes={post.vote_total} />
            <div>
              <Link
                href={`/post/${post.id}`}
                className="text-3xl hover:text-pink-500"
              >
                {post.title}
              </Link>
              <p className="text-zinc-700">posted by {post.name}</p>
            </div>
          </li>
        ))}
      </ul>
      <Pagination currentPage={currentPage} />
    </>
  );
}
