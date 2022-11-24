import React from "react";
import Link from "next/link";
import styles from "./Card.module.scss";

const Card = ({ experience }) => {
  const { title, company, date, description, image } = experience;
  return (
    <>
      <div className={`${styles.experience_card} card`}>
        <img
          src={image}
          className={`${styles.card_img} card-img-top`}
          alt={title}
        />
        {/* <div className={`${styles.card_img_div} `}></div> */}
        <div className={`${styles.experience_card_body} card-body`}>
          <h1 className={`${styles.experience_card_title} card-title`}>
            {company}
          </h1>
          <p className={`${styles.experience_card_text} card-text`}>{title}</p>
          <p className={styles.experience_card_sub_title}>{date}</p>
          <p className={styles.experience_card_description}>
          
            {description.substring(0, 100)}... <Link href="/experience">Read More</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
