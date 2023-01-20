import React,{useEffect} from "react";
import AddmitionReq from "../../components/AddmitionReq";
import Styles from "../../styles/AddmitionReqs.module.scss";
import { useData } from "../../contexts/dataContext";
import { useRouter } from 'next/router'
export default function Addmission({ getAddmissionReq }) {
  const { data } = useData();
  let router= useRouter()
  useEffect(() => {
    if (!data.isAdmin) {
      router.push('/admin')
    }
    
  }, []);
  

  return (
    <div className={Styles.addmitionReqs}>
      <div className={Styles.heading}></div>
      <div className={Styles.container}>
        {getAddmissionReq.map((elm) => (
          <AddmitionReq key={elm._id} AddmitionReq={elm} />
        ))}
      </div>
    </div>
  );
}
export const getServerSideProps = async (ctx) => {
  const server = `https://school-management-api-six.vercel.app`;
  const res = await fetch(`${server}/addmission`);
  const getAddmissionReq = await res.json();
  return {
    props: {
      getAddmissionReq,
    },
  };
};
