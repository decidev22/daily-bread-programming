import Image from "next/image";
import PrologueLogo from "./PrologueLogo";

export const NavBar = () => {
  return (
    <div className="grid grid-cols-5 gap-4 w-full p-5 px-10">
      <div className="col-span-2 flex">
        <PrologueLogo />
      </div>
      <div className="text-center">SearchBar</div>
      <div className="col-end-6">Login and Profile</div>
    </div>
  );
};
