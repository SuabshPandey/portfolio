import React from "react";
import ProjectCard from "../components/common/ProjectCard";
import projectList from "../components/home/projectList";
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
        <div className={`${styles.project_row} row`}>
          {projectList.map((project, index) => {
            return (
              <div
                className={`${styles.project_col} col-lg-4 col-md-4 col-sm-6`}
                key={index}
              >
                <ProjectCard project={project} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
