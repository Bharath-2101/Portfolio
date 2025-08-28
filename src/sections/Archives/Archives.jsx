import React, { useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import { archives } from "@/project data";

const Archives = () => {
  const rowsRef = useRef([]);

  const handleMouseEnter = (e, index) => {
    const row = rowsRef.current[index];
    if (!row) return;

    const span = row.querySelector("span");
    if (!span) return;

    const rect = row.getBoundingClientRect();
    const mouseY = e.clientY - rect.top;
    const halfHeight = rect.height / 2;

    if (mouseY <= halfHeight) {
      span.style.transformOrigin = "top";
    } else {
      span.style.transformOrigin = "bottom";
    }
  };

  const handleMouseLeave = (e, index) => {
    const row = rowsRef.current[index];
    if (!row) return;

    const span = row.querySelector("span");
    if (!span) return;

    const rect = row.getBoundingClientRect();
    const mouseY = e.clientY - rect.top;
    const halfHeight = rect.height / 2;

    if (mouseY <= halfHeight) {
      span.style.transformOrigin = "top";
    } else {
      span.style.transformOrigin = "bottom";
    }
  };

  useEffect(() => {
    rowsRef.current.forEach((row, index) => {
      if (!row) return;

      const onEnter = (e) => handleMouseEnter(e, index);
      const onLeave = (e) => handleMouseLeave(e, index);

      row.addEventListener("mouseenter", onEnter);
      row.addEventListener("mouseleave", onLeave);

      return () => {
        row.removeEventListener("mouseenter", onEnter);
        row.removeEventListener("mouseleave", onLeave);
      };
    });
  }, []);

  return (
    <div className={styles.MainContainer}>
      <div className={styles.MainTitle}>Archives</div>
      <div className={styles.ProjectContainer}>
        <div className={`${styles.Header} grid-cols-2 sm:grid-cols-3 p-2`}>
          <div className="text-left font-[Regular]">Project</div>
          <div className="hidden sm:block text-center font-[Regular]">Type</div>
          <div className="text-right font-[Regular]">Year</div>
        </div>
        {archives.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            key={index}
            ref={(el) => (rowsRef.current[index] = el)}
            className={`${styles.Row} p-2 grid-cols-2 sm:grid-cols-3`}
          >
            <div className="text-left">{project.title}</div>
            <div className="hidden sm:block text-center">
              {project.category}
            </div>
            <div className="text-right">{project.year}</div>
            <span />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Archives;
