import Image from "next/image";
import React from "react";
import { useState } from "react";
import { ClearAll, Clear } from "@material-ui/icons";
import Link from "next/link";
import { gallery } from "../handlePopupForms/gellary";
import Styles from "../styles/SingleGellary.module.scss";
import { useData } from "../contexts/dataContext";

export default function Gellary({ gellaryInfo }) {
  const [adminMenu, setadminMenu] = useState(false);
  let d = new Date(gellaryInfo.createdAt).toDateString();
  const { data, dispatch, showMessage } = useData();

  const creatingFormForPut = () => {
    dispatch({
      type: "createForm",
      value: gallery("put", showMessage, gellaryInfo._id, gellaryInfo.headline),
    });
  };
  const deliting = () => {
    fetch(`${data.url}/gellary/${gellaryInfo._id}`, {
      method: "delete",
    }).then((respo) => {
      if (respo.status == 200) {
        showMessage("Photo Deleted");
      } else {
        showMessage("Photo not Deleted");
      }
    });
  };
  return (
    <div className={Styles.gellary}>
      <div className={Styles.imageContainer}>
        {gellaryInfo.img && (
          <Image
            layout="fill"
            objectFit={"contain"}
            className={Styles.image}
            src={gellaryInfo.img}
            alt="photo"
          />
        )}
      </div>
      <div className={Styles.captionContainer}>
        <div className={Styles.headline}>{gellaryInfo.headline}</div>
        <div className={Styles.date}>{d}</div>
      </div>
      {data.isAdmin && (
        <>
          <div className={`${Styles.addmin} ${adminMenu ? Styles.active : ""}`}>
            <span onClick={creatingFormForPut}>Update</span>
            <span onClick={deliting}>Delete</span>
          </div>
          <div
            onClick={() => setadminMenu((preadminMenu) => !preadminMenu)}
            className={Styles.adminMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </>
      )}
    </div>
  );
}
