import React from "react";
import styles from "./styles.module.scss";
import Ad from "./ad";

const Header = () => {
  return (
    <header className={styles.header}>
      <Ad />
    </header>
  );
};

export default Header;
