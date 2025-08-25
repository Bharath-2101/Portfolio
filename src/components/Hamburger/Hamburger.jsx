"use client";
import React from "react";
import styles from "./styles.module.scss";
import useStore from "@/hooks/useStore";

const Hamburger = () => {
  const { hamburgerClick, changeHamburgerClick } = useStore();

  return (
    <div
      onClick={changeHamburgerClick}
      className={`${styles.MainContainer} ${
        hamburgerClick ? styles.active : ""
      }`}
    >
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
