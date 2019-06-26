import React from "react";
import styles from "./app.module.css";

export default () => (
  <>
    <header className={styles.headerContainer}>
      <a href="#contact">Contact</a>
      <a href="#github">GitHub</a>
      <a href="#projects">Projects</a>
      <a href="#about-me">About Me</a>
    </header>
    <main>
      <section id="about-me" className={styles.aboutMe}>
        <img src="" alt="headshot-placeholder" />
        <div>
          Hi, I'm Jameson Hill. I am a software engineer with experience
          building dynamic web applications.
        </div>
      </section>
      <section id="projects" />
      <section id="github" />
      <section id="contact" />
    </main>
  </>
);
