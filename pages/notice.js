import Styles from "../styles/Notice.module.scss";
import React from "react";
import { useData } from "../contexts/dataContext";
import Notice from "../components/Notice";
import { notice } from "../handlePopupForms/notice";
export default function NoticeCom({ getData }) {
  const { data, dispatch, showMessage } = useData();
  const creatingFormForPost = () => {
    dispatch({
      type: "createForm",
      value: notice("post", showMessage),
    });
  };

  return (
    <div className={Styles.notices}>
      <div className={Styles.container}>
        <div onClick={creatingFormForPost} className={Styles.add}>
          <button>Add a Notice</button>
        </div>
        {getData && (
          <div className={Styles.noticeContainer}>
            {getData.map((item) => (
              <Notice key={item._id} noticeInfo={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const server = `http://localhost:8002https://school-management-api-six.vercel.app`;
  const res = await fetch(`${server}/notice`);
  const getData = await res.json();
  return {
    props: {
      getData: getData.length > 0 ? getData : "",
    },
  };
};
