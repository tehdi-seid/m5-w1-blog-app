import React from "react";
import { NavLink } from "react-router";
function MainNave() {
  const navigators = ["home", "posts", "about"];
  return (
    <header className="flex justify-between py-3 shadow-sm shadow-gray-800 fixed top-0 left-0 w-full px-[5%] bg-black/40 backdrop-blur-xl border z-999 border-white/10">
      <NavLink className="text-2xl font-bold uppercase" to="/">
        blog
      </NavLink>
      <nav>
        <ul className="flex gap-6 text-lg capitalize">
          {navigators.map((navigator) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-gray-50"
              }
              to={`/${navigator === "home" ? "" : navigator}`}
            >
              {navigator}
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default MainNave;
