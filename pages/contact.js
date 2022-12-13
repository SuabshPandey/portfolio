import React, { useRef, useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { Icon } from "@iconify/react";
import styles from "../styles/contact.module.scss";
import { Alert } from "react-bootstrap";

const Result = () => {
  const [result, showResult] = useState(true);

  if (result) {
    return (
      <>
        <Alert variant="success" onClose={() => showResult(false)} dismissible>
          <p>Message Received!. I will reach you out within 48 hours.</p>
        </Alert>
      </>
    );
  }
};

const Contact = () => {
  const [result, showResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hfzfiqs",
        "template_kc2ex4u",
        form.current,
        "user_n8v7CMPb5v6hYugjyoXxD"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Email sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
    showResult(true);
  };

  setTimeout(() => {
    showResult(false);
  }, 5000);

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
                  quality projects or products ? Let&apos;s work together!
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
                      rel="noreferrer"
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
                      rel="noreferrer"
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
                      rel="noreferrer"
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
              <div className="row">{result ? <Result /> : null}</div>
              <form
                ref={form}
                onSubmit={sendEmail}
                className={`${styles.form_element}`}
              >
                <div className={`${styles.contact_info_row} row`}>
                  <div className={`${styles.contact_info_col} col-lg-6`}>
                    <input
                      type="text"
                      placeholder="Full Name"
                      name="full_name"
                      required
                      className={`${styles.form_input} form-control`}
                    />
                  </div>
                  <div className={`${styles.contact_info_col} col-lg-6`}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className={`${styles.form_input} form-control`}
                    />
                  </div>
                  <div className={`${styles.contact_info_col} col-lg-6`}>
                    <input
                      type="number"
                      name="phone"
                      required
                      placeholder="Phone Number"
                      className={`${styles.form_input} form-control`}
                    />
                  </div>
                  <div className={`${styles.contact_info_col} col-lg-6`}>
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      required
                      className={`${styles.form_input} form-control`}
                    />
                  </div>
                </div>
                <div className={`${styles.contact_info_row} row`}>
                  <div className={`${styles.contact_info_col} col-lg-12`}>
                    <textarea
                      name="message"
                      placeholder="Leave a message"
                      className={styles.text_area}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className={styles.btn_div}>
                  <button type="submit" className={`${styles.submit_btn}`}>
                    Send
                  </button>
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
