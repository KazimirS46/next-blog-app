import { getData } from "@/utils/getData";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
};

export default async function Blog() {
  const posts = await getData();
  return (
    <>
      <h1>Blog Page</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
