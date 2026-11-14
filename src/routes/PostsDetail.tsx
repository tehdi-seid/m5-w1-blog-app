import React, { useState } from "react";
import { SlInfo } from "react-icons/sl";
import { useParams } from "react-router";
import { posts } from "../data/posts";
import { LuClock } from "react-icons/lu";
import { Link } from "react-router";
const post = posts;
function find_post(slug: string | undefined) {
  if (slug) {
    return post.find((pos) => pos.slug === slug);
  }
}
function PostsDetail() {
  const params = useParams();
  const post_to_be_detailed = find_post(params.slug);

  const [isCopied, serIsCopied] = useState(false);
  async function handleCopy() {
    if (!post_to_be_detailed?.slug) return;
    await navigator.clipboard.writeText(post_to_be_detailed.slug);
    serIsCopied(true);

    setTimeout(() => {
      serIsCopied(false);
    }, 3000);
  }
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-950">
      <article className="border max-w-[min(100%,700px)] p-5 flex flex-col gap-4">
        <div className="flex items-center justify-end gap-2">
          <p>
            <LuClock />
          </p>
          <p>{post_to_be_detailed?.publishedAt}</p>
        </div>

        <div className="flex flex-col gap-4">
          <h5 className="text-3xl font-semibold">
            {post_to_be_detailed?.excerpt}
          </h5>
          <div className="flex gap-5">
            {post_to_be_detailed?.tags.map((tag) => (
              <p
                key={tag}
                className="border px-1.5 py-0.5 border-gray-700 bg-gray-800"
              >
                #{tag}
              </p>
            ))}
          </div>
          <p>{post_to_be_detailed?.body}</p>
        </div>

        <div>
          <button className="cursor-pointer" onClick={handleCopy}>
            {!isCopied ? "copy slug" : "slug copied"}
          </button>
          <Link to="/posts">back to posts</Link>
        </div>
      </article>
    </div>
  );
}

export default PostsDetail;
