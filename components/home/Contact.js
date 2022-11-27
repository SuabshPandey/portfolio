import React from "react";
import styles from "./contact.module.scss";

const Contact = () => {
  return (
    <div className={`${styles.contact_container} container`}>
      <h1 className={styles.contact_title}>Contact Me</h1>
      <div className={styles.contact}>
        <div className={styles.contact_info_div}>
          <h1>Get in Touch</h1>
          <form className={`${styles.form_element}`} action="#">
            <div className={`${styles.contact_info_row} row`}>
              <div className={`${styles.contact_info_col} col-lg-6`}>
                <input
                  type="text"
                  placeholder="Full Name"
                  className={`${styles.form_input} form-control`}
                />
              </div>
              <div className={`${styles.contact_info_col} col-lg-6`}>
                <input
                  type="email"
                  placeholder="Email"
                  className={`${styles.form_input} form-control`}
                />
              </div>
              <div className={`${styles.contact_info_col} col-lg-6`}>
                <input
                  type="number"
                  placeholder="Phone Number"
                  className={`${styles.form_input} form-control`}
                />
              </div>
              <div className={`${styles.contact_info_col} col-lg-6`}>
                <input
                  type="text"
                  placeholder="Address"
                  className={`${styles.form_input} form-control`}
                />
              </div>
            </div>
            <div className={`${styles.contact_info_row} row`}>
              <div className={`${styles.contact_info_col} col-lg-12`}>
                <textarea
                  placeholder="Leave a message"
                  className={styles.text_area}
                ></textarea>
              </div>
            </div>
            <div className={styles.btn_div}>
              <button className={`${styles.submit_btn}`}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
