import Link from "next/link";
import React from "react";
import Styles from "../../styles/Admin.module.scss";
import { useState } from "react";
import Register from "../../components/Register";
import Login from "../../components/Login";
import { useData } from "../../contexts/dataContext";

import { gallery } from "../../handlePopupForms/gellary";
import { newss } from "../../handlePopupForms/news";
import { student } from "../../handlePopupForms/student";
import { teacher } from "../../handlePopupForms/teacher";
import { notice } from "../../handlePopupForms/notice";
import { banner } from "../../handlePopupForms/banner";
export default function Admin() {
  const [item, setitem] = useState("add");
  const [content, setcontent] = useState("login");
  const { data, dispatch, showMessage } = useData();

  const creatingFormforNews = () => {
    dispatch({
      type: "createForm",
      value: newss("post", showMessage),
    });
  };
  const creatingFormForPostNotice = () => {
    dispatch({
      type: "createForm",
      value: notice("post", showMessage),
    });
  };
  const creatingFormForPostStudent = () => {
    dispatch({
      type: "createForm",
      value: student("post", showMessage),
    });
  };
  const creatingFormForPostTeacher = () => {
    dispatch({
      type: "createForm",
      value: teacher("post", showMessage),
    });
  };
  const creatingFormForPostGellary = () => {
    dispatch({
      type: "createForm",
      value: gallery("post", showMessage),
    });
  };
  const creatingFormForPostBanner = () => {
    dispatch({
      type: "createForm",
      value: banner("post", showMessage),
    });
  };
  return (
    <>
      {content == "register" && !data.isAdmin && (
        <Register setcontent={setcontent} />
      )}
      {!data.isAdmin && <Login setcontent={setcontent} />}
      {data.isAdmin && (
        <div className={Styles.admin}>
          <div className={Styles.heading}></div>
          <div className={Styles.container}>
            <div className={Styles.sidebar}>
              <div className={item == "add" ? Styles.active : ""}>Add</div>
              <div className={item == "massages" ? Styles.active : ""}>
                <Link href={"admin/massages"}>Massages</Link>
              </div>
              <div className={item == "result" ? Styles.active : ""}>
                <Link href={"admin/result"}>Search Result</Link>
              </div>
              <div className={item == "result" ? Styles.active : ""}>
                <Link href={"admin/edit-result"}>Edit Result</Link>
              </div>
              <div className={item == "addmission" ? Styles.active : ""}>
                <Link href={"admin/addmission"}>Addmission Request</Link>
              </div>
              <div className={item == "resultPublish" ? Styles.active : ""}>
              <Link href={"admin/publishResult"}>Publish Result</Link>
              </div>
            </div>
            <div className={Styles.mainContainer}>
              <div className={item == "add" ? Styles.active : ""}>
                <div onClick={creatingFormforNews}>News</div>
                <div onClick={creatingFormForPostNotice}>Notice</div>
                <div onClick={creatingFormForPostStudent}>Student</div>
                <div onClick={creatingFormForPostTeacher}>Teacher</div>
                <div>Information</div>
                <div onClick={creatingFormForPostGellary}>Gellary Image</div>
                <div onClick={creatingFormForPostBanner}>Banner</div>
                <div>Headline</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
