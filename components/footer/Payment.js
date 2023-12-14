import React from "react";
import styles from "./styles.module.scss";

const Payment = () => {
  return (
    <div className={styles.footer__payment}>
      <h3>WE ACCEPT</h3>
      <div className={styles.footer__flexwrap}>
        <img src="../../../images/visa_card.png" alt="" />
        <img src="../../../images/master_card.png" alt="" />
      </div>
    </div>
  );
};

export default Payment;
