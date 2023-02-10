import Styles from "../styles/Teacher.module.scss";
import React from "react";
import { useState } from "react";

import Teacher from "../components/Teacher";
import TeacherForm from "../popupForms/teacher/Teacher";
export default function TeacherCom({ getData }) {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <div className={Styles.teachers}>
        <div className={Styles.container}>
          <div onClick={() => setFormOpen(true)} className={Styles.add}>
            <button>Add Teacher</button>
          </div>
          <div className={Styles.teacherContainer}>
            {getData.map((item) => (
              <Teacher key={item._id} teacherInfo={item} />
            ))}
          </div>
        </div>
      </div>
      <TeacherForm
        formOpen={formOpen}
        setFormOpen={setFormOpen}
        method={"post"}
      />
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const server = `https://school-management-api-six.vercel.app`;
  const res = await fetch(`${server}/teacher`);

  const getData = await res.json();

  return {
    props: {
      getData,
    },
  };
};
