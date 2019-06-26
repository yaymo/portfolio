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
      <section id="about-me" />
      <section id="projects" />
      <section id="github" />
      <section id="contact" />
    </main>
  </>
);
