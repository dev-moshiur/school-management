import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";


import ToggleNavbar from "./ToggleNavbar";
import Styles from "../styles/Layout.module.scss";
import PopupMessage from "./PopupMessage";

export default function Layout({ children }) {
  return (
    <div className={Styles.layout}>
      <Topbar />
      <Navbar />
      <ToggleNavbar />
      <PopupMessage />
      
      {children}
      <Footer />
    </div>
  );
}
