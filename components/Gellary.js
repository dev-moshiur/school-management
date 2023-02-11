import Image from "next/image";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Styles from "../styles/SingleGellary.module.scss";
import { useData } from "../contexts/dataContext";
import GalleryForm from "../popupForms/gellary/Gellary";
export default function Gellary({ gellaryInfo }) {
  const [formOpen, setFormOpen] = useState(false);

  const [adminMenu, setadminMenu] = useState(false);
  let d = new Date(gellaryInfo.createdAt).toDateString();
  const { isAdmin, showMessage,url } = useData();

  const creatingFormForPut = () => {
    setFormOpen(true);
  };
  const deliting = () => {
    fetch(`${url}/gellary/${gellaryInfo._id}`, {
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
    <>
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
        {isAdmin && (
          <>
            <div
              className={`${Styles.addmin} ${adminMenu ? Styles.active : ""}`}
            >
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
      <GalleryForm
        formOpen={formOpen}
        setFormOpen={setFormOpen}
        method={"put"}
        id={gellaryInfo._id}
        headline={gellaryInfo.headline}
      />
    </>
  );
}
