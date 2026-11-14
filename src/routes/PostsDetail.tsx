import React, { useState } from "react";
import { SlInfo } from "react-icons/sl";
import { MdContentCopy } from "react-icons/md";
import { IoArrowBackOutline } from "react-icons/io5";
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
      <article className="border max-w-[min(100%,800px)] p-7 flex flex-col gap-4">
        <div className="flex items-center justify-end gap-2">
          <p>
            <LuClock />
          </p>
          <p>{post_to_be_detailed?.publishedAt}</p>
        </div>

        <div className="flex flex-col gap-4">
          <h5 className="text-3xl font-semibold text-gray-300">
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

        <div className="flex justify-between">
          <button
            className="cursor-pointer bg-gray-700 px-4 py-2 flex items-center gap-2 border border-gray-700 transition-all duration-200 ease-in capitalize text-gray-200 hover:border-gray-300 hover:border"
            onClick={handleCopy}
          >
            <MdContentCopy />
            {!isCopied ? "copy slug" : "copied!"}
          </button>
          <Link
            className="cursor-pointer bg-blue-900 px-4 py-2 flex items-center gap-2 border border-gray-700 transition-all duration-200 ease-in text-gray-200 capitalize hover:border-gray-300 hover:border"
            to="/posts"
          >
            <IoArrowBackOutline className="" />
            <p>back to posts</p>
          </Link>
        </div>
      </article>
    </div>
  );
}

export default PostsDetail;
