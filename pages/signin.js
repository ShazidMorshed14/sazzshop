import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/signin.module.scss";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";
import { Form, Formik } from "formik";
import LoginInput from "../components/inputs/loginInput";
import { SiMinutemailer } from "react-icons/si";
import { IoKeyOutline } from "react-icons/io5";
import * as Yup from "yup";
import CircledIconButton from "../components/buttons/circledIconButton";

const initialValues = {
  login_email: "",
  login_password: "",
};

const signin = () => {
  const [user, setUser] = useState(initialValues);

  const { login_email, login_password } = user;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginValidation = Yup.object({
    login_email: Yup.string()
      .required("Email is required!")
      .email("Please insert a valid email"),
    login_password: Yup.string().required("Password must be given"),
  });

  return (
    <>
      <Header />
      <div className={styles.login}>
        <div className={styles.login__container}>
          <div className={styles.login__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <span>We'd be happy to join us !</span>{" "}
            <Link href="/">
              <span className={styles.link_text}>Go Store</span>
            </Link>
          </div>

          <div className={styles.login__form}>
            <h1>Sign In</h1>
            <p>Get into one of the best ecommerce experience ever</p>
            <Formik
              enableReinitialize
              initialValues={{
                login_email,
                login_password,
              }}
              validationSchema={loginValidation}
            >
              {(form) => (
                <Form>
                  <LoginInput
                    type="text"
                    name="login_email"
                    icon={<SiMinutemailer />}
                    placeholder="Enter Email"
                    onChange={handleChange}
                  />
                  <LoginInput
                    type="password"
                    name="login_password"
                    icon={<IoKeyOutline />}
                    placeholder="Enter Password"
                    onChange={handleChange}
                  />
                  <CircledIconButton type="submit" text="Sign In" />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default signin;
