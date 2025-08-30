import React, { useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import { projects } from "@/project data/Projects";
import DemoSeal from "@/components/DemoSeal/DemoSeal";
import { mouseEnter, mouseLeave } from "@/Animation/Anime";
import gsap from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
gsap.registerPlugin(MorphSVGPlugin);

const Projects = () => {
  const rowsRef = useRef([]);
  const pathRefs = useRef([]);

  const animateSvg = (element, direction, mouseAction) => {
    const paths =
      mouseAction === "enter" ? mouseEnter[direction] : mouseLeave[direction];

    gsap.fromTo(
      element,
      { attr: { d: paths.Initial } },
      {
        attr: { d: paths.Final },
        duration: 0.4,
        ease: "cubic-bezier(0.83, 0, 0.17, 1)",
      }
    );
  };

  const handleMouseEnter = (e, index) => {
    const row = rowsRef.current[index];
    if (!row) return;

    const rect = row.getBoundingClientRect();
    const mouseY = e.clientY - rect.top;
    const halfHeight = rect.height / 2;

    if (mouseY <= halfHeight) {
      animateSvg(pathRefs.current[index], "Up", "enter");
    } else {
      animateSvg(pathRefs.current[index], "Down", "enter");
    }
  };

  const handleMouseLeave = (e, index) => {
    const row = rowsRef.current[index];
    if (!row) return;

    const rect = row.getBoundingClientRect();
    const mouseY = e.clientY - rect.top;
    const halfHeight = rect.height / 2;

    if (mouseY <= halfHeight) {
      animateSvg(pathRefs.current[index], "Up", "leave");
    } else {
      animateSvg(pathRefs.current[index], "Down", "leave");
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
    <div className={`${styles.MainContainer}`}>
      <div className={styles.MainTitle}>Project Works</div>
      <DemoSeal />
      <div className={styles.ProjectContainer}>
        <div className={`${styles.Header} grid-cols-2 sm:grid-cols-3 p-2`}>
          <div className="text-left font-[Regular]">Project</div>
          <div className="hidden sm:block text-center font-[Regular]">
            Category
          </div>
          <div className="text-right font-[Regular]">Year</div>
        </div>
        {projects.map((project, index) => (
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
            <svg
              viewBox="0 0 100 100"
              className={styles.SvgProject}
              preserveAspectRatio="none"
            >
              <path
                ref={(el) => (pathRefs.current[index] = el)}
                d="M 100 0 H 100 Q 100 50 100 100 H 100 V 0 Z"
              />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
