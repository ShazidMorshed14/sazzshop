import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { RiSearch2Line } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";

import { useSelector } from "react-redux";

const Main = () => {
  //   const { cart } = useSelector((state) => ({ ...state }));

  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <a className={styles.logo} href="/">
          <img src="../../../images/brand_logo.png" alt="brand-logo" />
        </a>

        <div className={styles.search}>
          <input type="text" placeholder="Search..." />
          <div className={styles.search__icon}>
            <RiSearch2Line />
          </div>
        </div>

        <a href="/cart" className={styles.cart}>
          <FaCartShopping />
          <span>0</span>
        </a>
      </div>
    </div>
  );
};

export default Main;
