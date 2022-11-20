import Image from "next/image";
import React from "react";
import styles from "./intro.module.scss";

const Intro = () => {
  return (
    <>
      <div className={`${styles.home_container_div} container`}>
        <div className={`${styles.home_row} row`}>
          <div className={`${styles.home_left_div} col-lg-6 col-md-6`}>
            <div className={styles.home_left_div_content}>
              <h1 className={styles.home_left_div_content_h1}>
                Hi, I'm{" "}
                <span className={styles.home_left_div_content_span}>
                  Subash Pandey
                </span>
              </h1>
              <p className={styles.sub_content}>
                I am a web developer with 2 years of experience in developing
                and designing websites. I am adept at HTML, CSS, SCSS,
                Bootstrap, Javascript, Jquery and frameworks like React JS, Next Js
                Node.js. <br /> I offer end-to-end solution for all your website
                development needs.
              </p>
              <button className={styles.home_download_button}>
                Download CV
              </button>
            </div>
          </div>
          <div className={`${styles.home_right_div} col-lg-6 col-md-6`}>
            <div className={styles.home_right_image_div}>
              <Image
                src="/images/me-rect.jpg"
                alt="Picture of the author"
                className={styles.my_image}
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
