import Image from "next/image";
import RightSidebar from "./components/r-sidebar";
import LeftSidebar from "./components/l-sidebar";
import StarButton from "./components/badge";
import HomeContent from "./components/home-content";
import AboutContent from "./components/about-content";

export default function Home() {
  return (
    <main className="overflow-scroll h-full w-full">
      <HomeContent />
      <AboutContent />
    </main>
  );
}
