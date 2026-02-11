import { PostList } from "../components/PostList";

export default async function Home({ searchParams }) {
  return <PostList searchParams={searchParams} />;
}
