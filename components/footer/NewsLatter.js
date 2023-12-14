import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const NewsLatter = () => {
  return (
    <div className={styles.footer__newsletter}>
      <h3>SIGN UP FOR OUT NEWSLATTER</h3>
      <div className={styles.footer__flex}>
        <input type="text" placeholder="Your Email Address" />
        <button className={styles.btn_primary}>Subscribe</button>
      </div>
      <p>
        By Clicking the Subscribe button , you are agreeing to{" "}
        <Link href="/">our pricvacy & policy</Link>
      </p>
    </div>
  );
};

export default NewsLatter;
