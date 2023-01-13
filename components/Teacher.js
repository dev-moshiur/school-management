import Image from "next/image";
import React from "react";
import TeacherImg from "./shohidul.png";
import { useState } from "react";
import { ClearAll, Clear } from "@material-ui/icons";
import Link from "next/link";
import { teacher } from "../handlePopupForms/teacher";
import Styles from "../styles/SingleTeacher.module.scss";
import { useData } from "../contexts/dataContext";
export default function Student({ teacherInfo }) {
  const [adminMenu, setadminMenu] = useState(false);

  const { data, dispatch, showMessage } = useData();
  // let imgSrc=`http://localhost:8002https://school-management-api-six.vercel.app/${teacherInfo.img}`;
  const creatingFormForPut = () => {
    dispatch({
      type: "createForm",
      value: teacher(
        "put",
        showMessage,
        teacherInfo._id,
        teacherInfo.name,
        teacherInfo.email,
        teacherInfo.phone,
        teacherInfo.qualification,
        teacherInfo.joinDate,
        teacherInfo.address,
        teacherInfo.post
      ),
    });
  };
  const deliting = () => {
    fetch(`${data.url}/teacher/${teacherInfo._id}`, {
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
          <a onClick={() => dispatch({ type: "setLink", value: "teacher" })}>
            See More
          </a>
        </Link>
      </div>

      {data.isAdmin && (
        <>
          <div className={`${Styles.addmin} ${adminMenu ? Styles.active : ""}`}>
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
  );
}
