"use client";
import React from "react";
import styles from "@/components/styles/Hamburger.module.scss";
import useStore from "@/hooks/useStore";

const Hamburger = () => {
  const { hamburgerClick, changeHamburgerClick } = useStore();
  return (
    <div
      onClick={changeHamburgerClick}
      className={`${styles.HamburgerCon} ${
        hamburgerClick ? styles.active : ""
      }`}
    >
      <span />
      <span />
    </div>
  );
};

export default Hamburger;
