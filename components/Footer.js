import Link from "next/link";
import React from "react";
import Styles from "../styles/Footer.module.scss";
import { AssistantOutlined, Email, Phone } from "@material-ui/icons";
export default function Footer() {
  return (
    <div className={Styles.footer}>
      <div className={Styles.left}>
        <div className={Styles.heading}>KSC Contact Information</div>
        <div className={Styles.address}>Chalkbanaroshi,Birganj,Dinajpur,</div>
        <div className={Styles.contact}>
          <div>
            <span>
              <Phone />
            </span>
            <span>+880 1725256642</span>
          </div>
          <div>
            <span>
              <Phone />
            </span>
            <span>+880 1885355627</span>
          </div>
          <div>
            <span>
              <Email />
            </span>
            <span>dev.moshiurr@gmail.com</span>
          </div>
        </div>
        <div className={Styles.heading}>Important Links</div>
        <div className={Styles.links}>
          <div className={Styles.part}>
            <Link href={"/"}>
              <a>Home</a>
            </Link>
            <Link href={"/"}>
              <a>About Us</a>
            </Link>
          </div>
          <div className={Styles.part}>
            <Link href={"/"}>
              <a>Students</a>
            </Link>
            <Link href={"/"}>
              <a>Teachers</a>
            </Link>
          </div>

          <div className={Styles.part}>
            <Link href={"/"}>
              <a>Classes</a>
            </Link>
            <Link href={"/"}>
              <a>Result</a>
            </Link>
          </div>
          <div className={Styles.part}>
            <Link href={"/"}>
              <a>News</a>
            </Link>
            <Link href={"/"}>
              <a>Notice</a>
            </Link>
          </div>
          <div className={Styles.part}>
            <Link href={"/"}>
              <a>Gellary</a>
            </Link>
            <Link href={"/"}>
              <a>Contact</a>
            </Link>
          </div>
          <div className={Styles.part}>
            <Link href={"/"}>
              <a>Login</a>
            </Link>
            <Link href={"/"}>
              <a>Addmission</a>
            </Link>
          </div>
        </div>
      </div>
      <div className={Styles.right}>
        <div className={Styles.heading}>About KHSC</div>
        <div className={Styles.info}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi veniam
          placeat laborum possimus numquam pariatur, et exercitationem quis
          facilis. Labore cum enim repudiandae eaque aut adipisci repellendus,
          tenetur repellat nihil!
        </div>
        <div className={Styles.link}>
          <Link href="/">More Info</Link>
        </div>
        <div className={Styles.img}></div>
        <div className={Styles.copyRight}>Copyright 2022 by</div>
      </div>
    </div>
  );
}
