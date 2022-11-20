import React from "react";
import { Icon } from "@iconify/react";
import styles from "./common.module.scss";
import Link from "next/link";

const SkillComponent = ({ skill }) => {
  const { name, icon, link } = skill;

  return (
    <>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className={styles.skill_link}
        href={link}
      >
        <div className={`${styles.skills_list_div}`}>
          <Icon className={styles.skill_icon} icon={icon} />
          <h3 className={styles.skills_name}>{name}</h3>
        </div>
      </Link>
    </>
  );
};

export default SkillComponent;
