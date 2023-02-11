import React,{useEffect} from "react";
import Styles from "../styles/ToggleNavbar.module.scss";
import { useData } from "../contexts/dataContext";
import Link from "next/link";
import {useRouter} from 'next/router';
import {SupervisedUserCircle} from '@material-ui/icons'
export default function ToggleNavbar() {
  const {pathname} = useRouter()
  const { menuOpen,setMenuOpen } = useData();
  useEffect(() => {
    setMenuOpen(false)
    
  }, [pathname])
  
  return (
    <div
      className={`${Styles.ToggleNavbar} ${
        menuOpen ? Styles.active : ""
      }`}
    >
      <div className={Styles.container}>
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
    </div>
  );
}
