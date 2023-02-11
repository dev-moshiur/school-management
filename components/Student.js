import Image from "next/image";
import React from "react";
import { useState } from "react";
import StudentForm from "../popupForms/student/Student";

import Styles from "../styles/SingleStudent.module.scss";
import { useData } from "../contexts/dataContext";
export default function Student({ studentInfo }) {
  const [adminMenu, setadminMenu] = useState(true);
  const { isAdmin, showMessage,url } = useData();
  const [formOpen, setFormOpen] = useState(false);

  const creatingFormForPut = () => {
    setFormOpen(true);
  };
  const deliting = () => {
    fetch(`${url}/${studentInfo._id}`, {
      method: "delete",
    }).then((respo) => {
      if (respo.status == 200) {
        showMessage("Student Deleted");
      } else {
        showMessage("Student not Deleted");
      }
    });
  };
  return (
    <>
      <div className={Styles.student}>
        <div className={Styles.left}>
          <div className={Styles.imgContainer}>
            {studentInfo.img && (
              <Image
                layout="responsive"
                width={"100%"}
                height="100%"
                className={Styles.image}
                src={studentInfo.img}
                alt="photo"
              />
            )}
          </div>
        </div>
        <div className={Styles.right}>
          <div className={Styles.name}>
            <span>Name :</span>
            <span>{studentInfo.username}</span>
          </div>
          <div className={Styles.class}>
            <span>Class :</span>
            <span>{studentInfo.className}</span>
          </div>
          <div className={Styles.group}>
            <span>Group : </span>
            <span>{studentInfo.group}</span>
          </div>
          <div className={Styles.roll}>
            <span>Roll :</span>
            <span>{studentInfo.roll}</span>
          </div>
          <div className={Styles.address}>
            <span>Address :</span>
            <span>{studentInfo.address}</span>
          </div>
          <div className={Styles.phone}>
            <span>Phone number :</span>
            <span>{studentInfo.phone}</span>
          </div>
          <div className={Styles.email}>
            <span>Email :</span>
            <span>{studentInfo.email}</span>
          </div>
        </div>
        {isAdmin && (
          <>
            <div
              className={`${Styles.admin} ${adminMenu ? Styles.active : ""}`}
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
      <StudentForm
        formOpen={formOpen}
        setFormOpen={setFormOpen}
        method={"put"}
        id={studentInfo._id}
        username={studentInfo.username}
        email={studentInfo.email}
        phone={studentInfo.phone}
        className={studentInfo.className}
        group={studentInfo.group}
        roll={studentInfo.roll}
        address={studentInfo.address}
      />
    </>
  );
}
