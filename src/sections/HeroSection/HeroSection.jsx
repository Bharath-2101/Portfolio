"use client";
import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import useStore from "@/hooks/useStore";
import HoverGrid from "@/components/HoverGrid/HoverGrid";

const HeroSection = () => {
  const { height, setDimensions, width } = useStore();

  useEffect(() => {
    const updateDimensions = () => {
      const newHeight =
        window.innerHeight +
        ((window.screen.height - window.innerHeight) * 62) / 100;

      setDimensions(newHeight, window.innerWidth);
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [setDimensions]);

  return (
    <div
      style={{
        height: `${height}px`,
      }}
      className={styles.MainContainer}
    >
      {width > 900 && <HoverGrid />}
      <div className={styles.SubCon}>
        <div>
          <div className="text-[#a4d16d]">
            <span className="font-[Italic] text-[clamp(40px,10vw,80px)]">
              B
            </span>
            HARATH{" "}
            <span className="font-[Italic] text-[clamp(40px,10vw,80px)]">
              K
            </span>
            AMATHAM{" "}
          </div>
        </div>
        <div>
          <span className="">FULL STACK DEVELOER</span>
        </div>
        <div>
          <span>@OPEN NETWORK</span>
        </div>
        <div>
          <span>BASED IN INDIA.</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
