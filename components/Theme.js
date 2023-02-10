import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Image from "next/image";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Styles from "../styles/Theme.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useData } from "../contexts/dataContext";
import { Delete } from "@material-ui/icons";
export default function Theme({ banners }) {
  const { data } = useData();

  const deliting = (id) => {
    fetch(`${data.url}/banner/${id}`, {
      method: "delete",
    }).then((respo) => {
      if (respo.status == 200) {
        showMessage("Banner Deleted");
      } else {
        showMessage("Banner not Deleted");
      }
    });
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  return (
    <div className={Styles.theme}>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className={Styles.mySwiper}
      >
        {banners &&
          banners.map((elm) => (
            <SwiperSlide key={elm._id} className={Styles.sliderItem}>
              <div className={Styles.img}>
                {
                  <Image
                    layout="responsive"
                    width={"100%"}
                    height="52rem"
                    className={Styles.image}
                    src={elm.img}
                    alt="photo"
                  />
                }
              </div>
              <div className={Styles.textContent}>
                <h3></h3>
                <p></p>
                <button>
                  <Link href={elm.link ? elm.link : "/"}>{elm.linkName}</Link>
                </button>
              </div>
              {data.isAdmin && (
                <>
                  <div className={Styles.delete}>
                    <Delete onClick={() => deliting(elm._id)} />
                    <span>Delete</span>
                  </div>
                </>
              )}
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
