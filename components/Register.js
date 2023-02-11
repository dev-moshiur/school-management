import React, { useRef } from "react";
import { useData } from "../contexts/dataContext";
import Loading from "./Loading";
import Styles from "../styles/Login.module.scss";
export default function Login({ setcontent }) {
  const { showMessage, url } = useData();

  let name = useRef();
  let email = useRef();
  let password = useRef();

  let cpassword = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password.current.value == cpassword.current.value) {
      fetch(`${url}/register/register`, {
        method: "post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          username: name.current.value,
          email: email.current.value,
          password: password.current.value,
        }),
      }).then((data) => {
        
        if (data.status == 200) {
          showMessage("Register Successfull");
          setcontent("admin");
        } else {
          showMessage("Something went wrong");
        }
      });
    } else {
      showMessage("Confirm password Carefully");
    }
  };
  return (
    <div className={Styles.login}>
      <div className={Styles.heading}>Register</div>
      <Loading loading={data.loading} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input ref={name} type="text" name="name" id="name" />
        <label htmlFor={"email"}>Email</label>

        <input required ref={email} type="email" name="email" />
        <label htmlFor="password">Password</label>
        <input required ref={password} type="password" name="password" />
        <label htmlFor="cpassword">Confirm Password</label>
        <input required ref={cpassword} type="password" name="cpassword" />
        <input className={Styles.blue} type="reset" value="Reset" />
        <input className={Styles.blue} type="submit" value="Submit" />
      </form>
      <div className={Styles.change}>
        have a account? <span onClick={() => setcontent("login")}>Login</span>
      </div>
    </div>
  );
}
