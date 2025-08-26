import Hamburger from "@/components/Hamburger/Hamburger";
import HeroSection from "@/sections/HeroSection/HeroSection";
import NavMenu from "@/sections/NavMenu/NavMenu";
import React from "react";

const page = () => {
  return (
    <div>
      <NavMenu />
      <HeroSection />
      <div className="h-[100vh]" />
    </div>
  );
};

export default page;
