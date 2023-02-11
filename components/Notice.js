import Image from "next/image";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Styles from "../styles/SingleNotice.module.scss";
import { useData } from "../contexts/dataContext";
import NoticeForm from "../popupForms/notice/Notice";

export default function Student({ noticeInfo }) {
  const [adminMenu, setadminMenu] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  

  const { isAdmin, showMessage,url } = useData();

  const creatingFormForPut = () => {
    setFormOpen(true)
  };
  const deliting = () => {
    fetch(`${url}/notice/${noticeInfo._id}`, {
      method: "delete",
    }).then((respo) => {
      if (respo.status == 200) {
        showMessage("Notice Deleted");
      } else {
        showMessage("Notice not Deleted");
      }
    });
  };
  return (
    <>

    <div className={Styles.notice}>
      <div className={Styles.imgContainer}>
        {noticeInfo.img && (
          <Image
            layout="fill"
            objectFit={"contain"}
            className={Styles.image}
            src={noticeInfo.img}
            alt="photo"
          />
        )}
      </div>
      <div className={Styles.left}>
        <div className={Styles.headline}>
          <span>{noticeInfo.headline}</span>
        </div>
        <div className={Styles.time}>
          <span>{new Date(noticeInfo.createdAt).toLocaleDateString()}</span>
          <span>{new Date(noticeInfo.createdAt).toLocaleTimeString()}</span>
        </div>
        <Link
          href={`/notice/[${noticeInfo._id}]`}
          as={`/notice/${noticeInfo._id}`}
        >
          <a >
            View
          </a>
        </Link>
      </div>
      {isAdmin && (
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
    <NoticeForm
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          method={"put"}
          id={noticeInfo._id}
          headline={noticeInfo.headline}
        />   
    
     </>
  );
}
