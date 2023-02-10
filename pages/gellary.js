import Styles from "../styles/Gellary.module.scss";
import React, { useState } from "react";
import Gellary from "../components/Gellary";
import GalleryForm from "../popupForms/gellary/Gellary";
export default function Gell({ getData }) {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <div className={Styles.gellary}>
        <div className={Styles.container}>
          <div onClick={() => setFormOpen(true)} className={Styles.add}>
            <button>Add a image to gellary</button>
          </div>
          <div className={Styles.gellaryContainer}>
            {getData.map((item) => (
              <Gellary key={item._id} gellaryInfo={item} />
            ))}
          </div>
        </div>
      </div>
      <GalleryForm
        formOpen={formOpen}
        setFormOpen={setFormOpen}
        method={"post"}
      />
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const server = `https://school-management-api-six.vercel.app`;
  const res = await fetch(`${server}/gellary`);
  const getData = await res.json();
  return {
    props: {
      getData,
    },
  };
};
