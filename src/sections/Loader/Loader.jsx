import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Loader = ({ loader, setLoader }) => {
  const MainRef = useRef();
  const stepsRef = useRef([]);
  const [height, setHeight] = useState(0);

  useGSAP(() => {
    if (stepsRef.current.length > 0) {
      gsap
        .timeline({
          onComplete: () => {
            setLoader(false);
          },
        })
        .to(stepsRef.current, {
          yPercent: -100,
          stagger: 0.17,
          ease: "cubic-bezier(0.76, 0, 0.24, 1)",
        })
        .to(MainRef.current, { yPercent: -100, duration: 0.01 });
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setHeight(
        window.innerHeight + (window.screen.height - window.innerHeight) * 0.62
      );
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={MainRef} style={{ height }} className={styles.MainContainer}>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (stepsRef.current[i] = el)}
          className={styles.Step}
        />
      ))}
    </div>
  );
};

export default Loader;
