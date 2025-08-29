import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";

const Loader = ({ loader, setLoader }) => {
  const MainRef = useRef();
  const stepsRef = useRef([]);
  const pathRefs = useRef([]);

  useGSAP(() => {
    gsap.registerPlugin(MorphSVGPlugin);
    if (stepsRef.current.length > 0 && pathRefs.current.length > 0) {
      gsap
        .timeline({
          onComplete: () => {
            setLoader(false);
          },
        })
        .to(
          stepsRef.current,
          {
            yPercent: -100,
            stagger: 0.17,
            ease: "cubic-bezier(0.76, 0, 0.24, 1)",
          },
          0
        )
        .to(
          pathRefs.current,
          {
            morphSVG: "M0 0 L100 0 L100 100 Q50 100 0 100 Z",
            stagger: 0.17,
            ease: "cubic-bezier(0.76, 0, 0.24, 1)",
          },
          0
        )
        .to(MainRef.current, { yPercent: -100, duration: 0.01 });
    }
  }, []);

  return (
    <div ref={MainRef} className={styles.MainContainer}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          ref={(el) => (stepsRef.current[i] = el)}
          className={styles.Step}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          stroke="none"
        >
          <path
            ref={(el) => (pathRefs.current[i] = el)}
            d="M0 0 L100 0 L100 100 Q50 50 0 100 Z"
            fill="#efefef"
          />
        </svg>
      ))}
    </div>
  );
};

export default Loader;
