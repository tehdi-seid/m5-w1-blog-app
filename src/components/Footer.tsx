import React from "react";
import { Link } from "react-router";
function Footer() {
  return (
    <div className="bg-gray-900 px-[5%] py-7 text-gray-300">
      <div className="flex flex-col gap-2 border-b pb-5">
        <h3 className="text-2xl">DevBlog</h3>
        <div>
          <h4>learn build grow</h4>
          <p>
            Your space for exploring web development, programming, and
            technology.
          </p>
        </div>
      </div>
      <div>
        <div>
          <h4 className="text-2xl font-semibold capitalize">quick link</h4>
          <ul className="flex flex-col text-lg">
            <Link className="hover:underline capitalize" to="/">
              home
            </Link>
            <Link className="hover:underline capitalize" to="/posts">
              posts
            </Link>
            <Link className="hover:underline capitalize" to="/about">
              about
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
