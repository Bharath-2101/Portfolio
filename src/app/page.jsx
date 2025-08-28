"use client";
import HeroSection from "@/sections/HeroSection/HeroSection";
import NavMenu from "@/sections/NavMenu/NavMenu";
import Projects from "@/sections/projects/Projects";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Archives from "@/sections/Archives/Archives";

const page = () => {
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
      <NavMenu />
      <HeroSection />
      <Projects />
      <Archives />
    </div>
  );
};

export default page;
