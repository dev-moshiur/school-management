import Image from "next/image";
import newsImg from "../../components/surgery.jpg";
import Styles from "../../styles/SingleNews.module.scss";
import React from "react";
import { ThumbUp, ThumbDown } from "@material-ui/icons";

export default function SingleNews({ news }) {
  return (
    <>
      {!news && <div className={Styles.loading}>loading</div>}
      <div className={Styles.SingleNews}>
        <div className={Styles.imgContainer}>
          {news.img && (
            <Image
              layout="responsive"
              width={"100%"}
              height={"40rem"}
              className={Styles.image}
              src={news.img}
              alt="photo"
            />
          )}
        </div>
        <div className={Styles.time}>
          <span>date: 08-10-2022</span>
          <span>Time 20:45 PM</span>
        </div>
        <div className={Styles.headline}>{news.headline}</div>
        <div className={Styles.details}>{news.data}</div>
        <div className={Styles.react}>
          <div className={Styles.like}>
            <ThumbUp />
            <span>46</span>
          </div>
          <div className={Styles.like}>
            <ThumbDown />
            <span>13</span>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const res = await fetch(
    `http://localhost:8002https://school-management-api-six.vercel.app/news/${ctx.params.id}`
  );
  const news = await res.json();
  return {
    props: {
      news,
    },
  };
};
