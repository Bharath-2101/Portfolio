import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState, useEffect } from "react";
import styles from "./styles.module.scss";

function useIsDesktop(breakpoint = 1024) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= breakpoint);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isDesktop;
}

const DemoSeal = () => {
  const SvgCon = useRef(null);
  const svgRef = useRef(null);
  const isDesktop = useIsDesktop();

  useGSAP(() => {
    gsap.to(svgRef.current, {
      rotation: "-=360",
      duration: 10,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <div ref={SvgCon} className={styles.SvgContainer}>
      <svg ref={svgRef} className={styles.Svg} viewBox="0 0 100 100">
        <defs>
          <path
            id="circlePath"
            d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
          />
        </defs>
        <text fontSize="8" fill="white">
          <textPath
            href="#circlePath"
            startOffset="0"
            textLength="251"
            lengthAdjust="spacingAndGlyphs"
            style={{ textTransform: "uppercase" }}
          >
            {isDesktop
              ? "- Click project for live demo - Click project for live demo"
              : "- Tap project for live demo - Tap project for live demo"}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default DemoSeal;
