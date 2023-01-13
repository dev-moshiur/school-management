import News from "../components/News";
import React from "react";
import { useState } from "react";
import { useData } from "../contexts/dataContext";
import Styles from "../styles/Allnews.module.scss";
import { newss } from "../handlePopupForms/news";
export default function NewsCom({ getData }) {
  const { data, dispatch, showMessage } = useData();

  const creatingForm = () => {
    dispatch({
      type: "createForm",
      value: newss("post", showMessage),
    });
  };
  return (
    <div className={Styles.Allnews}>
      <div className={Styles.addNews}>
        <button onClick={creatingForm}>Add A News</button>
      </div>
      {getData.map((item) => (
        <News key={item._id} allData={item} />
      ))}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const server = `https://school-management-api-six.vercel.app`;

  const res = await fetch(`${server}/news`);

  const getData = await res.json();

  // console.log(getData);

  return {
    props: {
      getData,
    },
  };
};
