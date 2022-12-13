import { Icon } from "@iconify/react";
import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={`${styles.footer_main_div} container-fluid`}>
        <div className={`${styles.footer_container} container`}>
          <div className={styles.footer_content}>
            <h1 className={styles.footer_title}>Let&apos;s Connect </h1>
            <div className={styles.social_links_div}>
              <a
                rel="noreferrer"
                href="mailto:itsmesubashpandey867@gmail.com"
                target="_blank"
                className={styles.contact_link}
              >
                <Icon className={styles.social_icons} icon="mdi:gmail" />
              </a>
              <a
                rel="noreferrer"
                href="https://github.com/SuabshPandey"
                target="_blank"
                className={styles.contact_link}
              >
                <Icon
                  className={styles.social_icons}
                  icon="akar-icons:github-fill"
                />
              </a>
              <a
                rel="noreferrer"
                href=" https://www.linkedin.com/in/subash-pandey-ab429a1a1/"
                target="_blank"
                className={styles.contact_link}
              >
                <Icon className={styles.social_icons} icon="mdi:linkedin" />
              </a>
              <a
                rel="noreferrer"
                href="https://www.facebook.com/subash.pandey.58118/"
                target="_blank"
                className={styles.contact_link}
              >
                <Icon className={styles.social_icons} icon="mdi:facebook" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.copyright_container_fluid} `}>
        <h1 className={styles.copyright_title}>
          © Copyright {new Date().getFullYear()} Subash Pandey
        </h1>
      </div>
    </>
  );
};

export default Footer;
