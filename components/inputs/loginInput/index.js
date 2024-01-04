import React from "react";
import styles from "../loginInput/styles.module.scss";
import { BiUser } from "react-icons/bi";
import { useField } from "formik";
const LoginInput = ({ icon, placeholder, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      {meta.error && <p className={styles.error}>{meta.error}</p>}
      <div className={styles.input}>
        {icon ? icon : <BiUser />}
        <input
          name={field.name}
          type={field.type}
          placeholder={placeholder || "Please Enter Value"}
          {...field}
          {...props}
        />
      </div>
    </>
  );
};

export default LoginInput;
