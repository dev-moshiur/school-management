import React from "react";
import Styles from "../../styles/Massage.module.scss";
import Massage from "../../components/Massage";
export default function Massages({ getMassage }) {
  return (
    <div className={Styles.massages}>
      <div className={Styles.heading}></div>
      <div className={Styles.container}>
        {getMassage.map((elm) => (
          <Massage key={elm._id} massageInfo={elm} />
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const res = await fetch(
    "https://school-management-api-six.vercel.app/message"
  );
  const getMassage = await res.json();
  return {
    props: {
      getMassage,
    },
  };
};
