import React from "react";
import skillList from "./skillList";
import styles from "./skills.module.scss";
import SkillComponent from "../common/SkillComponent";

const Skills = () => {
  return (
    <div className={styles.skill_main_div}>
      <h1 className={`${styles.skills_title}`}>SKILLS</h1>
      <div className={`${styles.skills_container}`}>
        <div className={`${styles.skills_container_item}`}>
          <div className={`${styles.skills_row} row m-0`}>
            {skillList.map((skill, index) => {
              return (
                <div
                  className={`${styles.skills_col} col-lg-4 col-md-6 col-sm-6`}
                  key={index}
                >
                  <SkillComponent skill={skill} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
