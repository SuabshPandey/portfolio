import Head from "next/head";
import Image from "next/image";
import About from "../components/home/About";
import Contact from "../components/home/Contact";
import Experience from "../components/home/Experience";
import Intro from "../components/home/Intro";
import Skills from "../components/home/Skills";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main_element}>
        {/* Intro Section */}

        <div className={styles.intro_container_fluid_div}>
          <Intro />
        </div>

        {/* About Section */}

        <div className={styles.about_container_fluid_div}>
          <About />
        </div>
        {/* Skills Section */}
        <div className={styles.skills_container_fluid_div}>
          <Skills />
        </div>

        {/* Experience Section */}
        <div className={styles.experience_container_fluid_div}>
          <Experience />
        </div>

        {/* Contact Section */}
        <div className={styles.contact_container_fluid_div}>
          <Contact />
        </div>
      </main>
    </div>
  );
}
