import Styles from "../styles/Teacher.module.scss";
import React from "react";
import { useData } from "../contexts/dataContext";
import { teacher } from "../handlePopupForms/teacher";
import Teacher from "../components/Teacher";
export default function TeacherCom({ getData }) {
  const { data, dispatch, showMessage } = useData();
  const creatingFormForPost = () => {
    dispatch({
      type: "createForm",
      value: teacher("post", showMessage),
    });
  };

  return (
    <div className={Styles.teachers}>
      <div className={Styles.container}>
        <div onClick={creatingFormForPost} className={Styles.add}>
          <button>Add Teacher</button>
        </div>
        <div className={Styles.teacherContainer}>
          {getData.map((item) => (
            <Teacher key={item._id} teacherInfo={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const server = `http://localhost:8002https://school-management-api-six.vercel.app`;
  const res = await fetch(`${server}/teacher`);

  const getData = await res.json();

  return {
    props: {
      getData,
    },
  };
};
