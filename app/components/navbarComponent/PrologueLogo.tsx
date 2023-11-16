"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const PrologueLogo = () => {
  const router = useRouter();
  return (
    <div className="flex flex-1">
      <Image
        onClick={() => router.push("/")}
        alt="Prologue Logo"
        src={"/PrologueLogo.png"}
        height={25}
        width={25}
        className="cursor-pointer"
      />
      <p className="px-2 text-lg">Prologue</p>
    </div>
  );
};
export default PrologueLogo;
