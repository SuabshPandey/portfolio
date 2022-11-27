import React from "react";
import styles from "../styles/project.module.scss";

const Projects = () => {
  return (
    <div className={`${styles.project_main_div} container-fluid`}>
      <div className={`${styles.project_container_div} container `}>
        <h1 className={styles.project_title}>Projects</h1>
        <p className={styles.project_subtitle}>
          I have worked with a variety of clients and companies on a wide range
          of projects. I am capable of working on both the front-end and
          back-end of a project. I currently work as a freelance web developer
          and designer.
        </p>
      </div>
    </div>
  );
};

export default Projects;
