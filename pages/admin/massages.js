import React, { useEffect } from "react";
import Styles from "../../styles/Massage.module.scss";
import Massage from "../../components/Massage";
import { useData } from "../../contexts/dataContext";
import { useRouter } from "next/router";
export default function Massages({ getMassage }) {
  const { data, showMessage } = useData();
  let router = useRouter();
  useEffect(() => {
    if (!data.isAdmin) {
      router.push("/admin");
      showMessage("Login as an Admin");
    }
  }, []);
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
