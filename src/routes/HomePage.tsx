import React from "react";
import { Link } from "react-router";
function HomePage() {
  return (
    <section className="mt-20 relative">
      <div className="relative flex flex-col gap-20 items-center">
        <h1 className="text-6xl font-bold text-[hsla(242,100%,40%)]">
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
          className="rounded-4xl capitalize px-4 py-2 bg-[hsl(242,100%,15%)] border border-[hsl(242,100%,20%)] shadow-sm shadow-[hsl(242,100%,25%)] hover:bg-transparent transition-all duration-200 ease-in relative hover:-top-1"
          to="/posts"
        >
          our posts
        </Link>
        <Link
          className="rounded-4xl capitalize px-4 py-2 hover:bg-[hsl(242,100%,15%)] border border-[hsl(242,100%,20%)] shadow-sm shadow-[hsl(242,100%,25%)] bg-transparent transition-all duration-100 ease-in relative hover:-top-1"
          to="/about"
        >
          about
        </Link>
      </div>
      <div>
        <h2>latest articles</h2>
      </div>
    </section>
  );
}

export default HomePage;
