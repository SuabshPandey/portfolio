import React from "react";
import Card from "../common/Card";
import styles from "./experience.module.scss";
import experienceList from "./experienceList";

const Experience = () => {
  return (
    <>
      <div className={`${styles.experience_container_div} container`}>
        <h1 className={styles.experience_title}>Experience</h1>
        <p className={styles.experience_sub_title}>
          I have worked with a variety of clients and companies on a wide range
          of projects. I am capable of working on both the front-end and
          back-end of a project. I currently work as a freelance web developer
          and designer.
        </p>
        <div className={styles.experience_card_div}>
          <div className={`${styles.experience_row} row p-0`}>
            {experienceList.map((experience, index) => {
              return (
                <div
                  className={`${styles.experience_column} col-lg-6 col-md-6`}
                  key={index}
                >
                  <Card experience={experience} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
