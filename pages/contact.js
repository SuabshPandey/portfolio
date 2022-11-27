import React from "react";
import styles from "../styles/contact.module.scss";

const Contact = () => {
  return (
    <>
      <div className={`${styles.contact_main_div} container-fluid`}>
        <div className={`${styles.contact_container_div} container`}>
          <h1 className={styles.contact_title}>Contact Me</h1>
          <p className={styles.contact_subtitle}>
            Want to build high quality projects or products ? <br /> Let's work
            together!
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
