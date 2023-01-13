import Link from "next/link";
import { Person } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import { useData } from "../contexts/dataContext";
import Styles from "../styles/Navbar.module.scss";
export default function Navbar() {
  const { data, dispatch } = useData();
  return (
    <div className={Styles.navbar}>
      <div className={Styles.bottom}>
        <div className={Styles.logo}>Khalshi High School And College</div>
        <div className={Styles.navber}>
          <Link href={"/"}>
            <a
              className={`${data.link == "home" ? Styles.active : ""}`}
              onClick={() => dispatch({ type: "setLink", value: "home" })}
            >
              Home
            </a>
          </Link>
          <Link href={"/about"}>
            <a
              className={`${data.link == "about" ? Styles.active : ""}`}
              onClick={() => dispatch({ type: "setLink", value: "about" })}
            >
              About
            </a>
          </Link>
          <Link href={"/news"}>
            <a
              className={`${data.link == "news" ? Styles.active : ""}`}
              onClick={() => dispatch({ type: "setLink", value: "news" })}
            >
              News
            </a>
          </Link>
          <Link href={"/notice"}>
            <a
              className={`${data.link == "notice" ? Styles.active : ""}`}
              onClick={() => dispatch({ type: "setLink", value: "notice" })}
            >
              Notice
            </a>
          </Link>
          <Link href={"/students"}>
            <a
              className={`${data.link == "students" ? Styles.active : ""}`}
              onClick={() => dispatch({ type: "setLink", value: "students" })}
            >
              Students
            </a>
          </Link>
          <Link href={"/addmission"}>
            <a
              className={`${data.link == "addmission" ? Styles.active : ""}`}
              onClick={() => dispatch({ type: "setLink", value: "addmission" })}
            >
              Addmission
            </a>
          </Link>
          <Link href={"/teachers"}>
            <a
              className={`${data.link == "teachers" ? Styles.active : ""}`}
              onClick={() => dispatch({ type: "setLink", value: "teachers" })}
            >
              Teachers
            </a>
          </Link>
          <Link href={"/result"}>
            <a
              className={`${data.link == "result" ? Styles.active : ""}`}
              onClick={() => dispatch({ type: "setLink", value: "result" })}
            >
              Result
            </a>
          </Link>
          <Link href={"/gellary"}>
            <a
              className={`${data.link == "gellary" ? Styles.active : ""}`}
              onClick={() => dispatch({ type: "setLink", value: "gellary" })}
            >
              Gellary
            </a>
          </Link>
          <Link href={"/contact"}>
            <a
              className={`${data.link == "contact" ? Styles.active : ""}`}
              onClick={() => dispatch({ type: "setLink", value: "contact" })}
            >
              Contact us
            </a>
          </Link>
          <Link href={"/admin"}>
            <a
              onClick={() => dispatch({ type: "setLink", value: "admin" })}
              className={`${data.link == "admin" ? Styles.active : ""}`}
            >
              Admin
            </a>
          </Link>
        </div>
        {/* <div className={Styles.login}>
            <Person/>
            <Link href={'/login'}>
            <span onClick={()=>dispatch({type:'setLink', value:'login'})}>Login</span>
          </Link>

        </div> */}
        <div
          onClick={() => dispatch({ type: "popup", value: "menu" })}
          className={`${Styles.menu} ${
            data.popup == "menu" ? Styles.active : ""
          }`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
