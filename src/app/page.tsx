import Image from "next/image";
import Navbar from "@/components/Navbar";
import LandingPage from "@/components/LandingPage";
import About from "@/components/About";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="pt-32 md:pt-48 mx-30 md:mx-60">
        <LandingPage />
        <About />
      </div>
    </div>
  );
}
