import React from "react";
import Styles from "../styles/Contact.module.scss";
import { useState } from "react";
import Loading from "../components/Loading";
import { useData } from "../contexts/dataContext";
export default function Contact() {
  const [loading, setloading] = useState(false);
  const { url, showMessage } = useData();

  const submitHangle = (e) => {
    e.preventDefault();
    setloading(true);
    const serverData = new FormData();
    serverData.append("name", e.target.name.value);
    serverData.append("email", e.target.email.value);
    serverData.append("message", e.target.message.value);
    fetch(`${url}/message`, {
      method: "post",
      body: serverData,
    }).then((res) => {
      if (res.status == 200) {
        showMessage("Request sent successfully");
        setloading(false);
      } else {
        showMessage("something went wrong");
        setloading(false);
      }
    });
    e.target.reset();
  };
  return (
    <div className={Styles.contact}>
      <div className={Styles.heading}>Contact Us</div>
      <div className={Styles.title}>Know your Opinion,report and so on</div>
      <form onSubmit={submitHangle}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
        <Loading loading={loading} />
        <input className={Styles.reset} type="reset" value="Reset" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
