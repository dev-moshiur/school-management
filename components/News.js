import Image from "next/image";
import Styles from "../styles/News.module.scss";

import Link from "next/link";
import React from "react";
import { newss } from "../handlePopupForms/news";
import { useState } from "react";
import { useData } from "../contexts/dataContext";

// import { ThumbUp,ThumbDown, AddToHomeScreenOutlined, ClearAll, Clear, AssistantOutlined } from '@material-ui/icons'

export default function News({ allData }) {
  const { data, dispatch, showMessage } = useData();
  const [adminMenu, setadminMenu] = useState(false);

  const [deleted, setdeleted] = useState(false);
  const id = allData._id;
  const creatingForm = () => {
    dispatch({
      type: "createForm",
      value: newss(
        "put",
        showMessage,
        allData._id,
        allData.headline,
        allData.data
      ),
    });
  };
  const deliting = () => {
    fetch(`${data.url}/news/${allData._id}`, {
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
    <div className={`${Styles.news} ${deleted ? Styles.deleted : ""}`}>
      <div className={Styles.container}>
        <div className={Styles.imgContainer}>
          {allData.img && (
            <Image
              layout="responsive"
              width={"100%"}
              height={"40rem"}
              className={Styles.image}
              src={allData.img}
              alt="photo"
            />
          )}
        </div>
        <div className={Styles.text}>
          <div className={Styles.headline}>{allData.headline}</div>
          <div className={Styles.time}>
            <span>date : {new Date(allData.createdAt).toDateString()}</span>
            <span>
              Time : {new Date(allData.createdAt).toLocaleTimeString()}
            </span>
          </div>
          <Link
            href={`/news/[${allData._id}]`}
            as={`/news/${allData._id}`}
            className={Styles.view}
          >
            <a onClick={() => dispatch({ type: "setLink", value: "news" })}>
              {" "}
              See More
            </a>
          </Link>
          {data.isAdmin && (
            <>
              <div
                className={`${Styles.addmin} ${adminMenu ? Styles.active : ""}`}
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
  );
}
