import React from "react";
import { Link } from "react-router";
import { posts } from "../data/posts";
import PostCard from "../components/PostCard";
function HomePage() {
  const latest_posts = posts.slice(1, 5);
  return (
    <section className="mt-20 relative mx-[5%] ">
      <div className="relative flex flex-col gap-20 items-center">
        <h1 className="text-6xl font-bold text-[hsla(242,100%,70%)]">
          Learn Build Grow
        </h1>
        <h2 className="text-2xl text-center">
          Welcome to DevBlog a space for developers and curious learners to
          explore programming, discover new technologies, and grow their
          software development skills
        </h2>
      </div>

      <div>
        <div className="bg-radial from-gray-400 blur-3xl to-transparent absolute w-full h-30 top-0 opacity-50"></div>
      </div>
      <div className="mt-30 flex justify-center gap-5">
        <Link
          className="rounded-4xl capitalize px-4 py-2 bg-[hsl(242,100%,30%)] border border-[hsl(242,100%,20%)] shadow-sm shadow-[hsl(242,100%,25%)] hover:bg-transparent transition-all duration-200 ease-in relative hover:-top-1"
          to="/posts"
        >
          our posts
        </Link>
        <Link
          className="rounded-4xl capitalize px-4 py-2 hover:bg-[hsl(242,100%,30%)] border border-[hsl(242,100%,20%)] shadow-sm shadow-[hsl(242,100%,25%)] bg-transparent transition-all duration-100 ease-in relative hover:-top-1"
          to="/about"
        >
          about
        </Link>
      </div>
      <div>
        <h1 className="text-2xl font-semibold my-4 hover:underline hover:text-[hsl(242,100%,80%)] w-max cursor-pointer my-10">
          latest articles
        </h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(380px,100%),1fr))] gap-5">
          {latest_posts.map((post) => (
            <PostCard post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomePage;
