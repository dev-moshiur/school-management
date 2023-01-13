import React from "react";
import { useState } from "react";
import { useData } from "../contexts/dataContext";
import Styles from "../styles/AddmitionReq.module.scss";

export default function AddmitionReq({ AddmitionReq }) {
  const [deleted, setdeleted] = useState(false);
  const { showMessage } = useData();
  const deliting = () => {
    fetch(`${data.url}/${AddmitionReq._id}`, {
      method: "delete",
    }).then((respo) => {
      if (respo.status == 200) {
        setdeleted(true);
        showMessage("Request deleted");
      } else {
        showMessage("Request not Deleted");
      }
    });
  };
  return (
    <div className={`${Styles.addmitionReq} ${deleted ? Styles.deleted : ""}`}>
      <div className={Styles.time}>
        <span>{new Date(AddmitionReq.createdAt).toDateString()}</span>
        <span>{new Date(AddmitionReq.createdAt).toLocaleTimeString()}</span>
      </div>
      <div className={Styles.top}>
        <div>
          <span>Name : </span>
          <span>{AddmitionReq.applicantName}</span>
        </div>
        <div>
          <span>Passed Institute : </span>
          <span>{AddmitionReq.preInstitute}</span>
        </div>
        <div>
          <span>Address : </span>
          <span>{AddmitionReq.address}</span>
        </div>
      </div>
      <div className={Styles.middle}>
        <div className={Styles.left}>
          <div>
            <span>PEC Roll : </span>
            <span>{AddmitionReq.PECRoll}</span>
          </div>
          <div>
            <span>GPA : </span>
            <span>{AddmitionReq.GPA}</span>
          </div>
        </div>
        <div className={Styles.right}>
          <div>
            <span>Phone : </span>
            <span>{AddmitionReq.phone}</span>
          </div>
          <div>
            <span>Gender : </span>
            <span>{AddmitionReq.gender}</span>
          </div>
        </div>
      </div>
      <div className={Styles.bottom}>
        <div className={Styles.img}>
          <div className={Styles.heading}>Result Sheet</div>
          <div className={Styles.imgContainer}></div>
        </div>
        <div className={Styles.option}>
          <button>Aprove</button>
          <button onClick={deliting}>Delete</button>
        </div>
      </div>
    </div>
  );
}
