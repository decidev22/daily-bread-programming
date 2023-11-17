"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const PrologueLogo = () => {
  const router = useRouter();
  return (
    <div className="relative flex h-[25px] w-[25px] cursor-pointer">
      <Image
        onClick={() => router.push("/")}
        alt="Prologue Logo"
        src={"/PrologueLogo.png"}
        layout="fill"
        objectFit="contain"
      />
      <p className="relative px-8 text-lg">Prologue</p>
    </div>
  );
};
export default PrologueLogo;
