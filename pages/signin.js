import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/signin.module.scss";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";
import { Form, Formik } from "formik";
import LoginInput from "../components/inputs/loginInput";
import { SiMinutemailer } from "react-icons/si";
import { IoKeyOutline } from "react-icons/io5";

const signin = () => {
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
            <Formik>
              {(form) => (
                <Form>
                  <LoginInput
                    icon={<SiMinutemailer />}
                    placeholder="Enter Email"
                  />
                  <LoginInput
                    icon={<IoKeyOutline />}
                    placeholder="Enter Password"
                  />
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
