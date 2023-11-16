"use client";
import Image from "next/image";
import classes from "./NavBar.module.css";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={"/icons/SearchIcon.png"}
        alt="Search Icon"
        width={25}
        height={25}
        className={classes.whiteicon}
      />
      <div className="underline underline-offset-1 items-center px-4">
        <p className="text-center">Search Blogs</p>
      </div>
      <button className="cursor-point border border-white rounded-[15px] px-1 text-[10px] h-min">
        Options
      </button>
    </div>
  );
};

export default SearchBar;
