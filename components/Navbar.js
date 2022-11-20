import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className={`${styles.header} container-fluid`}>
      <div className={`${styles.header_content} container`}>
        <Link href="/">
          <Image
            src="/images/portfolio_logo.png"
            width={70}
            height={50}
            alt="Portfolio Logo"
            className={styles.header_content_logo}
          ></Image>
        </Link>

        <nav
          className={`${styles.header_content_nav} ${
            menuOpen ? styles.isMenu : ""
          } `}
        >
          <ul className={styles.header_content_nav_ul}>
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/experience">Experience</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.header_content_toggle}>
          {!menuOpen ? (
            <AiOutlineBars onClick={toggleHandler} />
          ) : (
            <AiOutlineClose onClick={toggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
