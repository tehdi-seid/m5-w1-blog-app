import React from "react";
import { Link } from "react-router";
function MainNave() {
  return (
    <header className="flex justify-between py-3 shadow-sm mx-[5%] ">
      <Link className="text-2xl font-bold" to="/">
        blog
      </Link>
      <nav>
        <ul className="flex gap-6 text-lg">
          <Link to="/">home</Link>
          <Link to="/posts">posts</Link>
          <Link to="/about">about</Link>
        </ul>
      </nav>
    </header>
  );
}

export default MainNave;
