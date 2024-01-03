import React from "react";
import styles from "../loginInput/styles.module.scss";
import { BiUser } from "react-icons/bi";
const LoginInput = ({ icon, placeholder, type }) => {
  return (
    <div className={styles.input}>
      {icon ? icon : <BiUser />}
      <input
        type={type ? type : "text"}
        placeholder={placeholder || "Please Enter Value"}
      />
    </div>
  );
};

export default LoginInput;
