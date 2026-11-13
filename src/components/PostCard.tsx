import React from "react";
import { posts } from "../data/posts";
import { Link } from "react-router";
function PostCard() {
  const post = posts[0];
  console.log(post);
  return (
    <div className="border border-gray-900 hover:border-gray-700 w-100 hover:shadow-2xl hover:shadow-gray-900 p-5 flex flex-col gap-3 hover:scale-102 transition-all duration-300 ease-in">
      <p>{post.publishedAt}</p>
      <h2 className="text-2xl font-semibold text-gray-200">{post.title}</h2>
      <p>{post.excerpt}</p>
      <Link
        className="text-blue-500 capitalize relative hover:left-2 transition-all duration-300 ease-in"
        to={`/posts/:${post.slug}`}
      >
        read article →
      </Link>
    </div>
  );
}

export default PostCard;
