import Image from "next/image";
import Navbar from "@/components/Navbar";
import LandingPage from "@/components/LandingPage";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="mx-30">
        <LandingPage />
      </div>
    </div>
  );
}
