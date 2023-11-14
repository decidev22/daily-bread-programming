import Image from "next/image";
export const NavBar = () => {
  return (
    <div className="grid grid-cols-5 gap-4 w-full p-5 px-10">
      <div className="col-span-2 flex">
        <Image
          src="/PrologueLogo.png"
          alt="Prologue Logo"
          width={25}
          height={25}
        />
        <p className="px-2 text-lg">Prologue</p>
      </div>
      <div className="text-center">SearchBar</div>
      <div className="col-end-6">Login and Profile</div>
    </div>
  );
};
