import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
const links = [
  {
    heading: "SazzShop",
    links: [
      { name: "About Us", link: "" },
      { name: "Contact Us", link: "" },
      { name: "Social Responsibility", link: "" },
      { name: "", link: "" },
    ],
  },
  {
    heading: "HELP & SUPPORT",
    links: [
      { name: "Shipping Info", link: "" },
      { name: "Returns", link: "" },
      { name: "How To Order", link: "" },
      { name: "How To Track", link: "" },
      { name: "Size Guide", link: "" },
    ],
  },
  {
    heading: "Customer Service",
    links: [
      { name: "Customer Service", link: "" },
      { name: "Terms & Conditions", link: "" },
      { name: "Consumers (Transactions)", link: "" },
      { name: "Take out feedback survey", link: "" },
    ],
  },
];

const Links = () => {
  return (
    <div className={styles.footer__links}>
      {links.map((link, i) => {
        return (
          <ul>
            {i === 0 ? (
              <img src="../../images/brand_logo.png" />
            ) : (
              <b>{link.heading}</b>
            )}
            {link.links?.map((link) => (
              <li>
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        );
      })}
    </div>
  );
};

export default Links;
