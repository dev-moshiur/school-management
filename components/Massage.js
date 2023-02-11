import React from "react";
import { useState } from "react";
import { useData } from "../contexts/dataContext";
import Styles from "../styles/SingleMessage.module.scss";
export default function Massage({ massageInfo }) {
  const [deleted, setdeleted] = useState(false);
  const { showMessage,url } = useData();
  const deliting = () => {
    fetch(`${url}/message/${massageInfo._id}`, {
      method: "delete",
    }).then((respo) => {
      if (respo.status == 200) {
        setdeleted(true);
        showMessage("Message deleted");
      } else {
        showMessage("Message not Deleted");
      }
    });
  };
  return (
    <div className={`${Styles.message} ${deleted ? Styles.deleted : ""}`}>
      <div className={Styles.date}>
        <span>{new Date(massageInfo.createdAt).toDateString()}</span>
        <span>{new Date(massageInfo.createdAt).toLocaleTimeString()}</span>
      </div>
      <div className={Styles.top}>
        <div className={Styles.name}>{massageInfo.name}</div>
        <div className={Styles.email}>{massageInfo.email}</div>
      </div>
      <div className={Styles.bottom}>{massageInfo.message}</div>
      <div onClick={deliting} className={Styles.option}>
        Delete
      </div>
    </div>
  );
}
