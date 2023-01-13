import React from "react";
import Styles from "../styles/Popupmessage.module.scss";
import { useData } from "../contexts/dataContext";
export default function PopupMessage() {
  const { data, dispatch } = useData();
  return (
    <div
      className={`${Styles.popupMessage} ${
        data.popup == "popupMessage" ? Styles.active : ""
      }`}
    >
      {data.popupMessage}
    </div>
  );
}
