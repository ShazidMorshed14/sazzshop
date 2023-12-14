import React from "react";
import styles from "./styles.module.scss";
import Links from "./Links";
import Socials from "./Socials";
import NewsLatter from "./NewsLatter";
import Payment from "./Payment";
import CopyRight from "./CopyRight";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Links />
        <Socials />
        <NewsLatter />
        <Payment />
        <CopyRight />
      </div>
    </footer>
  );
};

export default Footer;
