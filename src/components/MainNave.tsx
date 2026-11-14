import React from "react";
import { NavLink } from "react-router";
function MainNave() {
  const navigators = ["home", "posts", "about"];
  return (
    <header className="flex justify-between py-3 shadow-sm mx-[5%] ">
      <NavLink className="text-2xl font-bold uppercase" to="/">
        blog
      </NavLink>
      <nav>
        <ul className="flex gap-6 text-lg">
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
