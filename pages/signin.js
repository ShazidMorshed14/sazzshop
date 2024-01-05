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

import { getProviders, signIn } from "next-auth/react";
import { FaUser, FaUserCheck } from "react-icons/fa";
import { MdEmail, MdMarkEmailUnread } from "react-icons/md";
import { loginValidation, signupValidation } from "../utils/validators/auth";

const providerIcon = {
  Facebook: "https://img.icons8.com/color/48/facebook-new.png",
  Google: "https://img.icons8.com/color/48/google-logo.png",
  GitHub: "https://img.icons8.com/ios-filled/48/github.png",
  Auth0:
    "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-auth0-the-solution-you-need-for-web-mobile-iot-and-internal-applications-logo-color-tal-revivo.png",
};

const initialValues = {
  login_email: "",
  login_password: "",
  name: "",
  email: "",
  password: "",
  conf_password: "",
};

export default function signin({ providers }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [user, setUser] = useState(initialValues);

  const { login_email, login_password, name, email, password, conf_password } =
    user;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <Header />
      <div className={styles.login}>
        {!isSignUp ? (
          <div className={styles.login__container}>
            <div className={styles.login__header}>
              <div className={styles.back__svg}>
                <BiLeftArrowAlt />
              </div>
              <span>Don't have an account here!</span>{" "}
              <span
                className={styles.link_text}
                onClick={() => setIsSignUp(true)}
              >
                Register
              </span>
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
                    <div className={styles.login__forgot}>
                      <Link href="/forgot">Forgot Password ?</Link>
                    </div>
                  </Form>
                )}
              </Formik>
              <div className={styles.login__socials}>
                <span className={styles.or}>Or continue with</span>
                <div className={styles.login__socials_wrap}>
                  {providers.map((provider, index) => (
                    <div key={index}>
                      <button
                        className={styles.socials__btn}
                        onClick={() => signIn(provider?.id)}
                      >
                        <img
                          src={providerIcon[provider?.name]}
                          alt="provider-icon"
                        />
                        Sign in with {provider.name}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.login__container}>
            <div className={styles.login__header}>
              <div className={styles.back__svg}>
                <BiLeftArrowAlt />
              </div>
              <span>Already Have an Account!</span>{" "}
              <span
                className={styles.link_text}
                onClick={() => setIsSignUp(false)}
              >
                Sign in
              </span>
            </div>

            <div className={styles.login__form}>
              <h1>Sign Up</h1>
              <p>Get into one of the best ecommerce experience ever</p>
              <Formik
                enableReinitialize
                initialValues={{
                  name,
                  email,
                  password,
                  conf_password,
                }}
                validationSchema={signupValidation}
              >
                {(form) => (
                  <Form>
                    <LoginInput
                      type="text"
                      name="name"
                      icon={<FaUser />}
                      placeholder="Enter Full Name"
                      onChange={handleChange}
                    />
                    <LoginInput
                      type="text"
                      name="email"
                      icon={<MdEmail />}
                      placeholder="Enter Email Address"
                      onChange={handleChange}
                    />
                    <LoginInput
                      type="password"
                      name="password"
                      icon={<IoKeyOutline />}
                      placeholder="Enter Password"
                      onChange={handleChange}
                    />
                    <LoginInput
                      type="password"
                      name="conf_password"
                      icon={<IoKeyOutline />}
                      placeholder="Re-Type Password"
                      onChange={handleChange}
                    />
                    <CircledIconButton type="submit" text="Sign Up" />
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = Object.values(await getProviders());
  return {
    props: { providers },
  };
}
