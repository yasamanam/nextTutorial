import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.title}>
      <h1>WebDev News</h1>
      <p className={styles.description}>Keep up to daate</p>
    </div>
  );
};

export default Header;
