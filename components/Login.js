import React, { useRef, useEffect, useState } from "react";
import { useData } from "../contexts/dataContext";
import Loading from "./Loading";
import Styles from "../styles/Login.module.scss";
import { Clear } from "@material-ui/icons";
export default function Login({ setcontent }) {
  const { showMessage, data, dispatch } = useData();
  const [loginMessage, setLoginMessage] = useState(true);
  let email = useRef();
  let password = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "load",
      value: true,
    });

    fetch(`${data.url}/register/login`, {
      method: "post",
      headers: { "Content-type": "application/json" },
      credentials: "include",

      body: JSON.stringify({
        email: email.current.value,
        password: password.current.value,
      }),
    }).then((data) => {
      dispatch({
        type: "load",
        value: false,
      });
      if (data.status == 200) {
        dispatch({
          type: "setAdmin",
          value: true,
        });
        showMessage("Login Successfull");
      } else {
        showMessage("Something went wrong");
      }
    });
  };

  return (
    <div className={Styles.login}>
      <div className={Styles.heading}>Login</div>
      <Loading loading={data.loading} />
      {loginMessage && (
        <div className={Styles.message}>
          <span>
            To check admin functionallity login with <br />
            <b>email : dev.moshiurr@gmail.com </b>
            <br />
            <b>password : 111</b>
          </span>
          <Clear onClick={() => setLoginMessage(false)} />
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <label htmlFor={"email"}>Email</label>

        <input required ref={email} type="email" name="email" />
        <label htmlFor="password">Password</label>
        <input required ref={password} type="password" name="password" />
        <input className={Styles.blue} type="reset" value="Reset" />
        <input className={Styles.blue} type="submit" value="Submit" />
      </form>
      <div className={Styles.change}>
        Dont have account?{" "}
        <span onClick={() => setcontent("register")}> Register</span>
      </div>
    </div>
  );
}
