import Image from "next/image";
import Styles from "../styles/News.module.scss";

import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useData } from "../contexts/dataContext";
import NewsForm from "../popupForms/news/News";

export default function News({ allData }) {
  const { isAdmin, showMessage,url } = useData();
  const [adminMenu, setadminMenu] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  const [deleted, setdeleted] = useState(false);
  const creatingForm = () => {
    setFormOpen(true);
  };
  const deliting = () => {
    fetch(`${url}/news/${allData._id}`, {
      method: "delete",
    }).then((respo) => {
      if (respo.status == 200) {
        setdeleted(true);
        showMessage("News deleted");
      } else {
        showMessage("News not Deleted");
      }
    });
  };
  return (
    <>
      <div className={`${Styles.news} ${deleted ? Styles.deleted : ""}`}>
        <div className={Styles.container}>
          <div className={Styles.imgContainer}>
            {allData.img && (
              <Image
                layout="responsive"
                width={"100%"}
                height={"50rem"}
                className={Styles.image}
                src={allData.img}
                alt="photo"
              />
            )}
          </div>
          <div className={Styles.text}>
            <div className={Styles.headline}>{allData.headline}</div>
            <div className={Styles.time}>
              <span>{new Date(allData.createdAt).toDateString()}</span>
              <span>
                {new Date(allData.createdAt).toLocaleTimeString()}
              </span>
            </div>
            <Link
              href={`/news/[${allData._id}]`}
              as={`/news/${allData._id}`}
              className={Styles.view}
            >
              <a >
                
                See More
              </a>
            </Link>
            {isAdmin && (
              <>
                <div
                  className={`${Styles.addmin} ${
                    adminMenu ? Styles.active : ""
                  }`}
                >
                  <span onClick={creatingForm}>Update</span>
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
        </div>
      </div>
      <NewsForm
        formOpen={formOpen}
        setFormOpen={setFormOpen}
        method={"put"}
        id={allData._id}
        headline={allData.headline}
        data={allData.data}
      />
    </>
  );
}
