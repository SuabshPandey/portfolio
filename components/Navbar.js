import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import styles from "./Navbar.module.scss";
import { useEffect } from "react";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  const toggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 1024 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

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
            menuOpen && size.width < 1024 ? styles.isMenu : ""
          } `}
        >
          <ul className={styles.header_content_nav_ul}>
            <li>
              <Link
                onClick={toggleHandler}
                className={router.asPath == "/" ? styles.active_link : ""}
                href="/"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                onClick={toggleHandler}
                className={
                  router.asPath == "/experience" ? styles.active_link : ""
                }
                href="/experience"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleHandler}
                className={
                  router.asPath == "/projects" ? styles.active_link : ""
                }
                href="/projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleHandler}
                className={
                  router.asPath == "/contact" ? styles.active_link : ""
                }
                href="/contact"
              >
                Contact
              </Link>
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
