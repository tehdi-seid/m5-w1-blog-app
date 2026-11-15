import React from "react";
import PostCard from "../components/PostCard";
import { posts } from "../data/posts";
import SearchForm from "../components/SearchForm";
import Filter from "../components/Filter";

function Posts() {
  const post = posts;
  return (
    <div className="my-20 mx-[5%]">
      <div className="flex">
        <SearchForm />
        <Filter />
      </div>
      <div>
        {" "}
        <h1 className="text-2xl font-semibold py-3 ">Posts</h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(380px,100%),1fr))] gap-5">
          {post.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Posts;
