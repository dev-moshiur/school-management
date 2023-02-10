import Styles from "../styles/Notice.module.scss";
import React ,{useState} from "react";

import Notice from "../components/Notice";
import NoticeForm from "../popupForms/notice/Notice";

export default function NoticeCom({ getData }) {
  const [formOpen, setFormOpen] = useState(false);
  const creatingFormForPost = () => {
    setFormOpen(true)
  };

  return (
    <>
    
    
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
    <NoticeForm
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          method={"post"}
        />
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const server = `https://school-management-api-six.vercel.app`;
  const res = await fetch(`${server}/notice`);
  const getData = await res.json();
  return {
    props: {
      getData: getData.length > 0 ? getData : "",
    },
  };
};
