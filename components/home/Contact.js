import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Alert } from "react-bootstrap";

import styles from "./contact.module.scss";

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
    <div className={`${styles.contact_container} container`}>
      <h1 className={styles.contact_title}>Contact Me</h1>
      <div className={styles.contact}>
        <div className={styles.contact_info_div}>
          <h1>Get in Touch</h1>
          <form
            ref={form}
            onSubmit={sendEmail}
            className={`${styles.form_element}`}
          >
            <div className={`${styles.contact_info_row} row`}>
              <div className={`${styles.contact_info_col} col-lg-6`}>
                <input
                  type="text"
                  required
                  name="full_name"
                  placeholder="Full Name"
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
                  placeholder="Phone Number"
                  required
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
              <div className={`${styles.message_div} row`}>
                {result ? <Result /> : null}
              </div>

              <button type="submit" className={`${styles.submit_btn}`}>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
