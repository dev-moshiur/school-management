import News from "../components/News";
import React from "react";
import { useState } from "react";

import Styles from "../styles/Allnews.module.scss";
import NewsForm from "../popupForms/news/News";
export default function NewsCom({ getData }) {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <div className={Styles.Allnews}>
        <div className={Styles.addNews} onClick={() => setFormOpen(true)}>
          <button>Add A News</button>
        </div>
        <div className={Styles.container}>
        {getData.map((item) => (
          <News key={item._id} allData={item} />
        ))}</div>
      </div>
      <NewsForm formOpen={formOpen} setFormOpen={setFormOpen} method={"post"} />
    </>
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
