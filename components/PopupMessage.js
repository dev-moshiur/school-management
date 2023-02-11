import React from "react";
import Styles from "../styles/Popupmessage.module.scss";
import { useData } from "../contexts/dataContext";
export default function PopupMessage() {
  const { popupMessage } = useData();
  return (
    <div
      className={`${Styles.popupMessage} ${
        popupMessage ? Styles.active : ""
      }`}
    >
      {popupMessage}
    </div>
  );
}
