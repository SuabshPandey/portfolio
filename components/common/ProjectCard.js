import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./projectcard.module.scss";

const ProjectCard = ({ project }) => {
  const { name, link, image, view_on, description } = project;
  return (
    <>
      <div className={`${styles.card_main_div} card`}>
        <div className={`${styles.card_img_div}`}>
          <Image
            width={400}
            height={400}
            src={image}
            className={`${styles.card_img} card-img-top`}
            alt={name}
          />
        </div>
        <div className={`${styles.card_content} card-body`}>
          <h1 className={`${styles.card_title} card-title`}>
            {name.substring(0, 27)}
          </h1>
          <p className={`${styles.card_content} card-text`}>
            {" "}
            {description.substring(0, 105)}
            {" ... "}
          </p>
          <Link href={link} className={styles.view_link} target="_blank">
            View {view_on}
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
