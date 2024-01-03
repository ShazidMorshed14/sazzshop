import React, { useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { MdSecurity } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { RiAccountPinCircleLine, RiArrowDropDownFill } from "react-icons/ri";
import UserMenu from "./UserMenu";
import { useSession } from "next-auth/react";

const Top = ({ country }) => {
  const { data: session } = useSession();
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li className={styles.li}>
            <img
              src={
                country?.flag
                  ? country?.flag
                  : "https://img.icons8.com/fluency/48/bangladesh-circular.png"
              }
              alt="flag-icon"
            />
            <span>{country?.name} / BDT</span>
          </li>
          <li className={styles.li}>
            <MdSecurity />
            <span>Buyer Protection</span>
          </li>
          <li className={styles.li}>
            <MdSecurity />
            <span>Customer Service</span>
          </li>
          <li className={styles.li}>
            <MdSecurity />
            <span>Help</span>
          </li>
          <li className={styles.li}>
            <BsSuitHeart />
            <span>Wishlists</span>
          </li>
          <li
            className={styles.li}
            onMouseOver={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
          >
            {session ? (
              <li className={styles.li}>
                <div className={styles.flex}>
                  <img src={session?.user?.image} alt="user-avatar" />
                  <span>{session?.user?.name}</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            ) : (
              <li className={styles.li}>
                <div className={styles.flex}>
                  <RiAccountPinCircleLine />
                  <span>Account</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            )}

            {visible && <UserMenu session={session} />}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Top;
