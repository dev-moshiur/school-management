import Styles from "../../styles/SinglePageteacher.module.scss";
import Image from "next/image";
import React from "react";
import { Email, Person, Phone, PinDrop, School } from "@material-ui/icons";

export default function TeacherSingle({ teacherInfo }) {
  return (
    <div>
      <div className={Styles.teacher}>
        <div className={Styles.left}>
          <div className={Styles.imgContainer}>
            {teacherInfo.img && (
              <Image
                layout="responsive"
                width={"100%"}
                height={"100%"}
                className={Styles.image}
                src={teacherInfo.img}
                alt="photo"
              />
            )}
          </div>
        </div>
        <div className={Styles.right}>
          <div className={Styles.name}>
            <Person/>
            <span>Name :</span>
            <span>{teacherInfo.name}</span>
          </div>
          <div className={Styles.qualification}>
            <School/>
            <span>Qualification :</span>
            <span>{teacherInfo.qualification}</span>
          </div>

          <div className={Styles.address}>
            <PinDrop/>
            <span>Address :</span>
            <span>{teacherInfo.address}</span>
          </div>
          <div className={Styles.phone}>
            <Phone/>
            <span>Phone number :</span>
            <span>{teacherInfo.phone}</span>
          </div>
          <div className={Styles.email}>
            <Email/>
            <span>Email :</span>
            <span>{teacherInfo.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const res = await fetch(
    `https://school-management-api-six.vercel.app/teacher/${ctx.params.id}`
  );
  const teacherInfo = await res.json();
  return {
    props: {
      teacherInfo,
    },
  };
};
