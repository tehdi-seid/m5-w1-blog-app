import React from "react";
import { posts, type Post } from "../data/posts";
import { Link } from "react-router";
import { MdOutlineDateRange } from "react-icons/md";

function PostCard({ post }: { post: Post }) {
  return (
    <div className="border border-gray-900 hover:border-gray-700 hover:shadow-2xl hover:shadow-gray-900 p-5 flex flex-col gap-3 hover:scale-102 transition-all duration-300 ease-in">
      <p className="flex items-center gap-0.5">
        <MdOutlineDateRange />
        {post.publishedAt}
      </p>
      <h2 className="text-2xl font-semibold text-gray-200">{post.title}</h2>
      <p>{post.excerpt}</p>
      <div className="flex gap-2">
        {post.tags.map((tag) => (
          <p
            key={tag}
            className="border px-1.5 py-0.5 border-gray-700 bg-gray-800"
          >
            #{tag}
          </p>
        ))}
      </div>
      <Link
        className="text-blue-500 capitalize hover:translate-x-2  duration-300 ease-in text-right transition-transform "
        to={`/posts/${post.slug}`}
      >
        read article →
      </Link>
    </div>
  );
}

export default PostCard;
