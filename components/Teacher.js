import Image from "next/image";
import React from "react";

import { useState } from "react";
import Link from "next/link";
import Styles from "../styles/SingleTeacher.module.scss";
import { useData } from "../contexts/dataContext";
import TeacherForm from "../popupForms/teacher/Teacher";

export default function Student({ teacherInfo }) {
  const [adminMenu, setadminMenu] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  const { isAdmin, showMessage,url } = useData();
  // let imgSrc=`https://school-management-api-six.vercel.app/${teacherInfo.img}`;
  const creatingFormForPut = () => {
    setFormOpen(true);
  };
  const deliting = () => {
    fetch(`${url}/teacher/${teacherInfo._id}`, {
      method: "delete",
    }).then((respo) => {
      if (respo.status == 200) {
        showMessage("Teacher Deleted");
      } else {
        showMessage("Teacher not Deleted");
      }
    });
  };
  return (
    <>
      <div className={Styles.teacher}>
        <div className={Styles.left}>
          <div className={Styles.imgContainer}>
            {teacherInfo.img && (
              <Image
                layout="responsive"
                width={"100%"}
                height="100%"
                className={Styles.image}
                src={teacherInfo.img}
                alt="photo"
              />
            )}
          </div>

          <div className={Styles.name}>
            <span>{teacherInfo.name}</span>
          </div>
          <div className={Styles.qualification}>
            <span>{teacherInfo.qualification}</span>
          </div>
          <Link
            href={`/teacher/[${teacherInfo._id}]`}
            as={`/teacher/${teacherInfo._id}`}
          >
            <a >
              See More
            </a>
          </Link>
        </div>

        {isAdmin && (
          <>
            <div
              className={`${Styles.addmin} ${adminMenu ? Styles.active : ""}`}
            >
              <span
                onClick={() => {
                  creatingFormForPut();
                  setadminMenu(false);
                }}
              >
                Update
              </span>
              <span
                onClick={() => {
                  deliting();
                  setadminMenu(false);
                }}
              >
                Delete
              </span>
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
      <TeacherForm
        formOpen={formOpen}
        setFormOpen={setFormOpen}
        method={"put"}
        id={teacherInfo._id}
        name={teacherInfo.name}
        email={teacherInfo.email}
        phone={teacherInfo.phone}
        qualification={teacherInfo.qualification}
        joinDate={teacherInfo.joinDate}
        address={teacherInfo.address}
        post={teacherInfo.post}
      />
    </>
  );
}
