import { Icon } from "@iconify/react";
import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={`${styles.footer_main_div} container-fluid`}>
        <div className={`${styles.footer_container} container`}>
          <div className={styles.footer_content}>
            <h1 className={styles.footer_title}>Let's Connect </h1>
            <div className={styles.social_links_div}>
              <Icon className={styles.social_icons} icon="mdi:gmail" />
              <Icon
                className={styles.social_icons}
                icon="akar-icons:github-fill"
              />
              <Icon className={styles.social_icons} icon="mdi:linkedin" />
              <Icon className={styles.social_icons} icon="mdi:facebook" />
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.copyright_container_fluid} `}>
        <h1 className={styles.copyright_title}>
          Copyright {new Date().getFullYear()}{" "} Subash Pandey
        </h1>
      </div>
    </>
  );
};

export default Footer;
