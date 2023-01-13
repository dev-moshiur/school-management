import React from "react";
import Styles from "../styles/SingleAdmit.module.scss";
export default function SingleAdmit({ admit }) {
  return (
    <div className={Styles.singleAdmit}>
      <div className={Styles.container}>
        <div className={Styles.top}>
          <div className={Styles.schoolName}>Khlashi High School</div>
          <div className={Styles.examName}>Annual Examination 2022</div>
          <div className={Styles.heading}>Admit Card</div>
        </div>
        <div className={Styles.middle}>
          <div className={Styles.name}>
            <span>Name :</span>
            <span>{admit.username}</span>
          </div>
          <div className={Styles.others}>
            <div>
              <span>class :</span>
              <span>{admit.className}</span>
            </div>
            <div>
              <span>Group :</span>
              <span>{admit.group}</span>
            </div>
            <div>
              <span>Roll :</span>
              <span>{admit.roll}</span>
            </div>
          </div>
        </div>
        <div className={Styles.bottom}>
          <div className={Styles.stdSign}>Student</div>
          <div className={Styles.teacSign}>Head Teacher</div>
        </div>
      </div>
    </div>
  );
}
