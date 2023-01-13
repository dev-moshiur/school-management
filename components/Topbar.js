import React from "react";
import Styles from "../styles/Topbar.module.scss";
import { Facebook, Info, Linkedin } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className={Styles.topbar}>
      <div className={Styles.logo}>Logo</div>
      <div className={Styles.welcome}>
        Welcome to Khalshi High School and Colleges website
      </div>

      <div className={Styles.icons}>
        <Info />
        {/* <span><Linkedin/></span> */}
      </div>
    </div>
  );
}
