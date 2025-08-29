"use client";
import React from "react";
import styles from "./styles.module.scss";
import { NavLinks, SocialMedia } from "@/project data";

const Footer = () => {
  return (
    <div className={styles.MainContainer}>
      <div className={styles.SVGCon}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M0 100 L0 50 L30 50 L35 0 L65 0 L70 50 L100 50 L100 100 Z"
            fill="#efefef"
          />
          <ellipse
            cx="42"
            cy="40"
            rx="1"
            ry="10"
            fill="#121212"
            stroke="#121212"
          />
          <ellipse
            cx="58"
            cy="40"
            rx="1"
            ry="10"
            fill="#121212"
            stroke="#121212"
          />
        </svg>
      </div>

      <div className={styles.LocationContainer}>
        <div>
          <span>LOCATION</span>
        </div>
        <div>
          <span>Currently Based in INDIA</span>
        </div>
      </div>

      <div className={styles.NavigationContainer}>
        <div>
          <span>NAVIGATION</span>
        </div>
        <div className={styles.LinksCon}>
          {NavLinks.map((link, item) => (
            <div className={"UnderlineEffect cursor-pointer"} key={item}>
              {link.title}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.SocialsContainer}>
        <div>
          <span>SOCIALS</span>
        </div>
        <div className={styles.SocialLinksCon}>
          {SocialMedia.map((link, item) => (
            <a href={link.link} className={"UnderlineEffect"} key={item}>
              {link.title}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.CopyRight}>
        <span>2025 &copy;</span>
        <span>Made By Bharath Kumar</span>
      </div>
    </div>
  );
};

export default Footer;
