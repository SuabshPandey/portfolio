import Link from "next/link";
import React from "react";
import styles from "./certificate.module.scss";

const Certificate = ({ list }) => {
  const { title, name, date, location, link } = list;
  return (
    <>
      <div className={styles.certificate_main_div}>
        <div className={`${styles.certificate_div}`}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.institute_name}>- {name}</p>
          <p className={styles.location}>- {location}</p>
          <p className={styles.date}>
            {" "}
            <i>-{date}</i>
          </p>
        </div>
        <div className={styles.btn_div}>
          <Link href={link} target="_blank" className={styles.view_btn}>
            View Certificate
          </Link>
        </div>
      </div>
    </>
  );
};

export default Certificate;
