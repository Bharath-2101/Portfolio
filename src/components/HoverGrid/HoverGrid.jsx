"use client";
import React, { useMemo, useCallback } from "react";
import styles from "./styles.module.scss";
const HoverGrid = () => {
  const columnCount = 20;
  const amountOfVerticalBlocks = useMemo(
    () => Math.ceil(window.innerHeight / (window.innerWidth * 0.05)),
    []
  );

  const handleMouseEnter = useCallback((e) => {
    const el = e.currentTarget;
    el.classList.remove(styles.fade);
    el.classList.add(styles.active);

    const animationTimeout = setTimeout(() => {
      el.classList.remove(styles.active);
      el.classList.add(styles.fade);

      const cleanupTimeout = setTimeout(() => {
        el.classList.remove(styles.fade);
      }, 10);

      return () => clearTimeout(cleanupTimeout);
    }, 300);

    return () => clearTimeout(animationTimeout);
  }, []);

  const gridColumns = useMemo(
    () =>
      [...Array(columnCount)].map((_, colIndex) => (
        <div key={`col-${colIndex}`} className={styles.Column}>
          {[...Array(amountOfVerticalBlocks)].map((_, blockIndex) => (
            <div
              key={`block-${colIndex}-${blockIndex}`}
              className={styles.Block}
              onMouseEnter={handleMouseEnter}
              aria-hidden="true"
            />
          ))}
        </div>
      )),
    [amountOfVerticalBlocks, handleMouseEnter]
  );

  return (
    <div className={styles.HoverGridCon} role="presentation">
      {gridColumns}
    </div>
  );
};

export default React.memo(HoverGrid);
