import Image from "next/image";
import Styles from "../../styles/SinglePageNotice.module.scss";

import React from "react";

export default function NoticeSingle({ noticeInfo }) {
  return (
    <div>
      <div className={Styles.notice}>
        <div className={Styles.left}>
          <div className={Styles.imgContainer}>
            {noticeInfo.img && (
              <Image
                layout="responsive"
                width={"100%"}
                height={"90rem"}
                className={Styles.image}
                src={noticeInfo.img}
                alt="photo"
              />
            )}
          </div>
        </div>
        <div className={Styles.right}>
          <div className={Styles.headline}>
            <span>{noticeInfo.headline}</span>
          </div>
          <div className={Styles.time}>
            <span>{noticeInfo.createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export const getServerSideProps = async (ctx) => {
  const res = await fetch(
    `https://school-management-api-six.vercel.app/notice/${ctx.params.id}`
  );
  const noticeInfo = await res.json();
  return {
    props: {
      noticeInfo,
    },
  };
};
