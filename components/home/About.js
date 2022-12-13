import Image from "next/image";
import React from "react";
import styles from "./about.module.scss";

const About = () => {
  return (
    <>
      <div className={`${styles.about_container} container `}>
        <h1 className={`${styles.about_title}`}>About Me</h1>
        <p className={`${styles.title_content}`}>
          WOW! A Whole Page Is Just About Me
        </p>
        <div className={`${styles.about_row} row`}>
          <div className={`${styles.about_left_div} col-lg-5 col-md-6`}>
            <div className={`${styles.about_image_div} col-lg-6 col-md-6`}>
              <Image
                src="/images/me-rect1.jpg"
                alt="Picture of the author"
                className={styles.my_image}
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className={`${styles.about_right_div} col-lg-7 col-md-6`}>
            <div className={styles.about_content_div}>
              <p className={styles.sub_content}>
                I am an IT engineer and web developer, with a bachelor&apos;s
                degree in Information Technology from Pokhara University. I
                always put in my best effort and try to stay humble. <br />{" "}
                <br />I have been creating websites for the past two years. I
                have worked on many projects and have gained a lot of
                experience. I am always looking for new opportunities to learn
                and grow. I am a self-taught web developer.
                <br /> <br /> I believe in practice and consistency. Those are
                the two things that will get you to where you want to be.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
