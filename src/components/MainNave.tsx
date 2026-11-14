import React from "react";
import { NavLink } from "react-router";
function MainNave() {
  return (
    <header className="flex justify-between py-3 shadow-sm mx-[5%] ">
      <NavLink className="text-2xl font-bold" to="/">
        blog
      </NavLink>
      <nav>
        <ul className="flex gap-6 text-lg">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-gray-50"
            }
            to="/"
          >
            home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-gray-50"
            }
            to="/posts"
          >
            posts
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-gray-50"
            }
            to="/about"
          >
            about
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default MainNave;
