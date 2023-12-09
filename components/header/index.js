import React from "react";
import styles from "./styles.module.scss";
import Ad from "./ad";
import Top from "./Top";

const Header = () => {
  return (
    <header className={styles.header}>
      <Ad />
      <Top />
    </header>
  );
};

export default Header;
