import React from "react";
import Styles from "../styles/Admits.module.scss";
import SingleAdmit from "./SingleAdmit";
export default function Admits({ admits }) {
  return (
    <div className={Styles.admits}>
      <div className={Styles.heading}></div>
      <div className={Styles.container}>
        {admits.map((items, index) => (
          <SingleAdmit key={index} admit={items} />
        ))}
      </div>
    </div>
  );
}
