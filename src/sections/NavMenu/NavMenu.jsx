"use client";
import React, { useRef } from "react";
import styles from "./styles.module.scss";
import Hamburger from "@/components/Hamburger/Hamburger";
import { useGSAP } from "@gsap/react";
import useStore from "@/hooks/useStore";
import gsap from "gsap";
import { NavLinks } from "@/project data/NavLinks";
import { SocialMedia } from "@/project data/NavLinks";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

const NavMenu = () => {
  const { hamburgerClick } = useStore();
  const NavContainer = useRef();
  const linksRef = useRef([]);
  const socialRef = useRef([]);

  const getBase = () => {
    const vw = window.innerWidth * 0.07;
    return Math.max(18, Math.min(vw, 30));
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "expo.out" },
    });

    const base = getBase();

    if (hamburgerClick) {
      tl.to(NavContainer.current, {
        width: base * 10.2,
        height: base * 17,
        duration: 1,
      });
      tl.fromTo(
        linksRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: { each: 0.1, from: "start" },
          ease: "power3.out",
        },
        "-=0.6"
      );
      tl.fromTo(
        socialRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: { each: 0.08, from: "start" },
          ease: "power2.out",
        },
        "-=0.4"
      );
    } else {
      tl.to(linksRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        stagger: { each: 0.06, from: "end" },
        ease: "power2.in",
      });

      tl.to(
        socialRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.25,
          stagger: { each: 0.05, from: "end" },
          ease: "power2.in",
        },
        "-=0.15"
      );

      tl.to(
        NavContainer.current,
        {
          width: base * 3,
          height: base * 1.8,
          duration: 0.6,
          ease: "expo.inOut",
        },
        "-=0.1"
      );
    }
  }, [hamburgerClick]);

  const handleMouseEnter = (e, index) => {};
  const handleMouseLeave = (e, index) => {};

  return (
    <>
      <div className={styles.Logo}>
        <span>BHARATH KUMAR</span>
      </div>
      <div ref={NavContainer} className={`${styles.MainContainer}`}>
        <Hamburger />
        <div className={styles.NavCon}>
          <div className={styles.NavLinksCon}>
            {NavLinks.map((link, index) => (
              <div
                key={index}
                ref={(el) => (linksRef.current[index] = el)}
                className="UnderlineEffect"
              >
                <span>{link.title}</span>
              </div>
            ))}
          </div>
          <div className={styles.SocialLinksCon}>
            {SocialMedia.map((link, index) => (
              <div key={index}>
                <a
                  ref={(el) => (socialRef.current[index] = el)}
                  href={link.link}
                  target="_blank"
                  className="UnderlineEffect"
                >
                  <span>{link.title}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
