import React from "react";
import Styles from "../styles/ToggleNavbar.module.scss";
import { useData } from "../contexts/dataContext";
import Link from "next/link";
export default function ToggleNavbar() {
  const { data, dispatch } = useData();
  return (
    <div
      className={`${Styles.ToggleNavbar} ${
        data.popup == "menu" ? Styles.active : ""
      }`}
    >
      <div className={Styles.container}>
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
        <Link href={"/result"}>
          <a
            className={`${data.link == "result" ? Styles.active : ""}`}
            onClick={() => dispatch({ type: "setLink", value: "result" })}
          >
            Result
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
        <Link href={"classes"}>
          <a
            className={`${data.link == "classes" ? Styles.active : ""}`}
            onClick={() => dispatch({ type: "setLink", value: "classes" })}
          >
            Classes
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
    </div>
  );
}
