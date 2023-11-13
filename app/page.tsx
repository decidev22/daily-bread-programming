import Image from "next/image";
import { Inter } from "next/font/google";
import { NavBar } from "./components/navbarComponent/navbar";
import { MainPage } from "./main/mainpage";
import { Footer } from "./components/footterComponent/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex-col h-screen">
      <NavBar />
      <MainPage />
      <Footer />
    </div>
  );
}
