import Link from "next/link";

import Styles from "../../styles/Admin.module.scss";
import { useState } from "react";
import Register from "../../components/Register";
import Login from "../../components/Login";
import { useData } from "../../contexts/dataContext";
import GellaryForm from "../../popupForms/gellary/Gellary";
import NewsForm from "../../popupForms/news/News";
import StudentForm from "../../popupForms/student/Student";
import TeacherForm from "../../popupForms/teacher/Teacher";
import BannerForm from "../../popupForms/banner/Banner";
import NoticeForm from "../../popupForms/notice/Notice";

export default function Admin() {
  const [item, setitem] = useState("add");
  const [content, setcontent] = useState("login");
  const { isAdmin } = useData();
  const [popupFormName, setPopupFormName] = useState("");
  const [formOpen, setFormOpen] = useState(false);

  const creatingFormforNews = () => {
    setPopupFormName("news");
    setFormOpen(true);
  };
  const creatingFormForPostNotice = () => {
    setPopupFormName("notice");
    setFormOpen(true);
  };
  const creatingFormForPostStudent = () => {
    setPopupFormName("student");
    setFormOpen(true);
  };
  const creatingFormForPostTeacher = () => {
    setPopupFormName("teacher");
    setFormOpen(true);
  };
  const creatingFormForPostGellary = () => {
    setPopupFormName("gellary");
    setFormOpen(true);
  };
  const creatingFormForPostBanner = () => {
    setPopupFormName("banner");
    setFormOpen(true);
  };
  return (
    <>
      {content == "register" && !data.isAdmin && (
        <Register setcontent={setcontent} />
      )}
      {!isAdmin && <Login setcontent={setcontent} />}
      {isAdmin && (
        <div className={Styles.admin}>
          <div className={Styles.heading}></div>
          <div className={Styles.container}>
            <div className={Styles.sidebar}>
              <div>Visit Admin Routes</div>
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
              
            </div>
            <div className={Styles.mainContainer}>
              
                <div >Add Website Content</div>
                <div onClick={creatingFormforNews}>News</div>
                <div onClick={creatingFormForPostNotice}>Notice</div>
                <div onClick={creatingFormForPostStudent}>Student</div>
                <div onClick={creatingFormForPostTeacher}>Teacher</div>
                
                <div onClick={creatingFormForPostGellary}>Gellary Image</div>
                <div onClick={creatingFormForPostBanner}>Banner</div>
                
              
            </div>
          </div>
        </div>
      )}

      {popupFormName == "gellary" && (
        <GellaryForm
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          method={"post"}
        />
      )}
      {popupFormName == "news" && (
        <NewsForm
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          method={"post"}
        />
      )}

      {popupFormName == "teacher" && (
        <TeacherForm
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          method={"post"}
        />
      )}
      {popupFormName == "student" && (
        <StudentForm
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          method={"post"}
        />
      )}
      {popupFormName == "banner" && (
        <BannerForm
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          method={"post"}
        />
      )}
      {popupFormName == "notice" && (
        <NoticeForm
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          method={"post"}
        />
      )}
    </>
  );
}
