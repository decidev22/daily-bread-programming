import Image from "next/image";
import { Inter } from "next/font/google";

import { MainPage } from "./main/mainpage";
import { Footer } from "./components/footterComponent/footer";
import { NavBar } from "./components/navbarComponent/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex-col h-screen bg-prologue-black text-white px-5 overflow-hidden">
      <NavBar />
      <MainPage />
      <Footer />
    </div>
  );
}
