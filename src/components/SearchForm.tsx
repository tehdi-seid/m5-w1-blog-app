import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

function SearchForm() {
  return (
    <form className="flex-1 relative rounded-4xl overflow-hidden border">
      <input
        className="w-full py-2 px-4 outline-0 "
        type="text"
        placeholder="Search"
      />

      <div className="absolute right-0 top-1/2 rounded-r-4xl -translate-y-1/2 h-full bg-gray-700 flex justify-center items-center px-5">
        <FaMagnifyingGlass />
      </div>
    </form>
  );
}

export default SearchForm;
