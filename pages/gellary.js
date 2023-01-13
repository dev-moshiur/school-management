import Styles from "../styles/Gellary.module.scss";
import React from "react";
import { useData } from "../contexts/dataContext";
import Gellary from "../components/Gellary";
import { gallery } from "../handlePopupForms/gellary";
export default function Gell({ getData }) {
  const { data, dispatch, showMessage } = useData();
  const creatingFormForPost = () => {
    dispatch({
      type: "createForm",
      value: gallery("post", showMessage),
    });
  };

  return (
    <div className={Styles.gellary}>
      <div className={Styles.container}>
        <div onClick={creatingFormForPost} className={Styles.add}>
          <button>Add a image to gellary</button>
        </div>
        <div className={Styles.gellaryContainer}>
          {getData.map((item) => (
            <Gellary key={item._id} gellaryInfo={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const server = `http://localhost:8002https://school-management-api-six.vercel.app`;
  const res = await fetch(`${server}/gellary`);
  const getData = await res.json();
  return {
    props: {
      getData,
    },
  };
};
