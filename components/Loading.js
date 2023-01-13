import Image from "next/image";
import React from "react";
import Styles from "../styles/Loading.module.scss";
import loadingImg from "./Loading_2.gif";
export default function Loading({ loading }) {
  return (
    <div className={`${Styles.loading} ${loading ? Styles.display : ""}`}>
      <Image src={loadingImg} height={"70px"} width="70px" />
    </div>
  );
}
