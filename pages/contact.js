import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import styles from "../styles/contact.module.scss";

const Contact = () => {
  return (
    <>
      <div className={`${styles.contact_main_div} container-fluid`}>
        <div className={`${styles.contact_container_div} container`}>
          {/* <h1 className={styles.contact_title}>Contact Me</h1> */}
          {/* <p className={styles.contact_subtitle}>
            Want to build high quality projects or products ? <br /> Let's work
            together!
          </p> */}
          <div className={`${styles.contact_row} row`}>
            <div className={`${styles.contact_left_div} col-lg-6 col-md-12`}>
              <div className={styles.contact_left_inner_div}>
                <h1 className={styles.contact_left_title}>Get In Touch</h1>
                <p className={styles.contact_left_subtitle}>
                  Want to work together or have a question? Want to build high
                  quality projects or products ? Let's work together!
                </p>
              </div>
              <div className={styles.contact_info}>
                <p className="contact_para">
                  <Icon
                    className={styles.contact_icon}
                    icon="material-symbols:location-on"
                  />
                  Kathmandu, Nepal
                </p>
                <p className="contact_para">
                  <Icon
                    className={styles.contact_icon}
                    icon="material-symbols:call"
                  />
                  +977 9808039867, 9866397480
                </p>
                <p className="contact_para">
                  <Icon
                    className={styles.contact_icon}
                    icon="ic:outline-email"
                  />
                  itsmesubashpandey3@gmail.com
                </p>

                <div className={styles.contact_social_links}>
                  <p className="contact_para">
                    <a
                      href=" https://www.linkedin.com/in/subash-pandey-ab429a1a1/"
                      target="_blank"
                      className={styles.contact_link}
                    >
                      <Icon
                        className={styles.contact_social_icon}
                        icon="uil:linkedin"
                      />
                    </a>
                  </p>
                  <p className="contact_para">
                    <a
                      href="https://github.com/SuabshPandey"
                      target="_blank"
                      className={styles.contact_link}
                    >
                      <Icon
                        className={styles.contact_social_icon}
                        icon="mdi:github"
                      />
                    </a>
                  </p>
                  <p className="contact_para">
                    <a
                      href="https://www.facebook.com/subash.pandey.58118/"
                      target="_blank"
                      className={styles.contact_link}
                    >
                      <Icon
                        className={styles.contact_social_icon}
                        icon="mdi:facebook"
                      />
                    </a>
                  </p>
                  <p className="contact_para">
                    <a
                      href="https://www.instagram.com/__subash_rock1__/"
                      target="_blank"
                      className={styles.contact_link}
                    >
                      <Icon
                        className={styles.contact_social_icon}
                        icon="mdi:instagram"
                      />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles.contact_right_div} col-lg-6 col-md-12`}>
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
      </div>
    </>
  );
};

export default Contact;
