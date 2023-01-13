import Styles from "../styles/Marksheet.module.scss";

import React from "react";
import jsPDF from "jspdf";

export default function Marksheet({ data }) {
  const genaratePDF = () => {
    let doc = new jsPDF("p", "pt", "a4");
    doc.html(document.getElementById("pdfDownload"), {
      callback: (pdf) => {
        pdf.save("result.pdf");
      },
    });
  };

  return (
    <div className={Styles.marksheet}>
      <div id="pdfDownload" className={Styles.container}>
        <div className={Styles.top}>
          <div className={Styles.schoolName}>{data[0].schoolName}</div>
          <div className="examName">{data[0].examtype}</div>
        </div>
        <div className={Styles.middle}>
          <div className={Styles.stdName}>
            <span className={Styles.head}>Name : </span>
            <span className={Styles.value}>{data[0].studentName}</span>
          </div>
          <div className={Styles.divission}>
            <span className={Styles.head}>Group : </span>
            <span className={Styles.value}>{data[0].group}</span>
          </div>
          <div className={Styles.classes}>
            <span className={Styles.head}>Class : </span>
            <span className={Styles.value}>{data[0].className}</span>
          </div>

          <div className={Styles.roll}>
            <span className={Styles.head}>Roll : </span>
            <span className={Styles.value}>{data[0].roll}</span>
          </div>
          <div className={Styles.roll}>
            <span className={Styles.head}>GPA : </span>
            <span className={Styles.value}>{data[0].GPA}</span>
          </div>
          <div className={Styles.roll}>
            <span className={Styles.head}>Result : </span>
            <span className={Styles.value}>{data[0].greade}</span>
          </div>
          <div className={Styles.roll}>
            <span className={Styles.head}>Total Mark : </span>
            <span className={Styles.value}>{data[0].totalMark}</span>
          </div>
        </div>
        <div className={Styles.bottom}>
          <div className={Styles.heading}>Result Sheet</div>
          <table>
            <thead>
              <tr>
                <th>Subject Name</th>
                <th>GPA</th>
                <th>Mark</th>
                <th>Point</th>
              </tr>
            </thead>
            <tbody>
              {data[0].subjets.map((items) => (
                <tr key={items.subject}>
                  <td>{items.subject}</td>
                  <td>{items.subGreate}</td>
                  <td>{items.subMarks}</td>
                  <td>{items.subGpa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <button onClick={genaratePDF}>Download as PDF</button>
    </div>
  );
}
