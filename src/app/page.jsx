"use client";
import HeroSection from "@/sections/HeroSection/HeroSection";
import NavMenu from "@/sections/NavMenu/NavMenu";
import Projects from "@/sections/projects/Projects";
import React, { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Archives from "@/sections/Archives/Archives";
import Footer from "@/sections/Footer/Footer";
import Loader from "@/sections/Loader/Loader";

const page = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  return (
    <div>
      {loader && <Loader loader={loader} setLoader={setLoader} />}
      <NavMenu />
      <HeroSection />
      <Projects />
      <Archives />
      <Footer />
    </div>
  );
};

export default page;
