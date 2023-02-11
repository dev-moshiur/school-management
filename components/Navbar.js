import Link from "next/link";
import { Person, SupervisedUserCircle } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import { useData } from "../contexts/dataContext";
import Styles from "../styles/Navbar.module.scss";
import {useRouter} from 'next/router';

import Image from "next/image";

export default function Navbar() {
  const {pathname} = useRouter()
  const { menuOpen,setMenuOpen } = useData();
  return (
    <div className={Styles.navbar}>
      <div className={Styles.bottom}>
        <div className={Styles.logo}>Khalshi High School And College</div>
        <div className={Styles.navber}>
          <Link href={"/"}>
            <a
              className={`${pathname == "/" ? Styles.active : ""}`}
              
            >
              Home
            </a>
          </Link>
          <Link href={"/about"}>
            <a
              className={`${pathname == "/about" ? Styles.active : ""}`}
              
            >
              About
            </a>
          </Link>
          <Link href={"/news"}>
            <a
              className={`${pathname == "/news" ? Styles.active : ""}`}
              
            >
              News
            </a>
          </Link>
          <Link href={"/notice"}>
            <a
              className={`${pathname == "/notice" ? Styles.active : ""}`}
              
            >
              Notice
            </a>
          </Link>
          <Link href={"/students"}>
            <a
              className={`${pathname == "/students" ? Styles.active : ""}`}
              
            >
              Students
            </a>
          </Link>
          <Link href={"/addmission"}>
            <a
              className={`${pathname == "/addmission" ? Styles.active : ""}`}
              
            >
              Addmission
            </a>
          </Link>
          <Link href={"/teachers"}>
            <a
              className={`${pathname == "/teachers" ? Styles.active : ""}`}
              
            >
              Teachers
            </a>
          </Link>
          <Link href={"/result"}>
            <a
              className={`${pathname == "/result" ? Styles.active : ""}`}
              
            >
              Result
            </a>
          </Link>
          <Link href={"/gellary"}>
            <a
              className={`${pathname == "/gellary" ? Styles.active : ""}`}
              
            >
              Gellary
            </a>
          </Link>
          <Link href={"/contact"}>
            <a
              className={`${pathname == "/contact" ? Styles.active : ""}`}
              
            >
              Contact us
            </a>
          </Link>
          <Link href={"/admin"}>
            <a
              
              className={`${pathname == "/admin" ? Styles.active : ""}`}

            >
              <SupervisedUserCircle/>
              <span>Admin</span>
              
            </a>
          </Link>
        </div>
        
        <div
          onClick={() => setMenuOpen((pre) =>!pre)}
          className={`${Styles.menu} ${
            menuOpen ? Styles.active : ""
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
