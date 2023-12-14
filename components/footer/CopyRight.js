import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";

const data = [
  {
    name: "Privacy Center",
    link: "/",
  },
  {
    name: "Privacy & Cookie Policy",
    link: "/",
  },
  {
    name: "Manage Cookies",
    link: "/",
  },
  {
    name: "Privacy Center",
    link: "/",
  },
  {
    name: "Terms & Conditions",
    link: "/",
  },
];

const CopyRight = () => {
  return (
    <div className={styles.footer__copyright}>
      <section>©2023 SazzShop All Rights Reserved.</section>
      <section>
        <ul>
          {data.map((link) => (
            <li>
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
          <li>
            <a>
              <IoLocationSharp />
              Bangladesh
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CopyRight;
