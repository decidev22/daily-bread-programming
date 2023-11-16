import Image from "next/image";
import PrologueLogo from "./PrologueLogo";
import SearchBar from "./SearchBar";
import LoginComponent from "./LoginComponent";

export const NavBar = () => {
  return (
    <div className="grid grid-cols-5 gap-4 w-full p-5 px-10">
      <div className="col-span-2 flex">
        <PrologueLogo />
      </div>
      <SearchBar />
      <div className="col-end-6">
        <LoginComponent />
      </div>
    </div>
  );
};
