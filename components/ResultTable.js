import RowResult from "./RowResult";

import React from "react";
import jsPDF from "jspdf";
import Styles from "../styles/ResultTable.module.scss";
export default function ResultTable({ data, edit }) {
  const genaratePDF = () => {
    let doc = new jsPDF("p", "pt", "a2");
    doc.html(document.getElementById("pdfDown"), {
      callback: (pdf) => {
        pdf.save("result.pdf");
      },
    });
  };

  return (
    <>
      <div id="pdfDown" className={Styles.rowResultContainer}>
        <div className={Styles.header}>
          <div className={Styles.schoolName}>{data[0].schoolName}</div>
          <div className={Styles.examType}>
            {data.examType || "Annual Examination 2023"}
          </div>
          <div className={Styles.other}>
            <div>
              <span>class :</span>
              <span>{data[0].className}</span>
            </div>
            <div>
              <span>Group :</span>
              <span>{data[0].group}</span>
            </div>
          </div>
        </div>
        <div className={Styles.table}>
          <table>
            <thead>
              <tr>
                {edit && (
                  <>
                    <th>Action</th>
                    <th>Class</th>
                    <th>Group</th>
                  </>
                )}
                <th>Roll</th>
                <th>Name</th>
                {data &&
                  data[0].subjets.map((elm) => (
                    <th key={elm.subject} colSpan={4}>
                      Subject,Grade and Mark
                    </th>
                  ))}
                <th colSpan={2}>total</th>
                <th>Merit</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((elm, index) => (
                  <RowResult key={index} edit={edit} index={index} data={elm} />
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {!edit && (
        <button className={Styles.button} onClick={genaratePDF}>
          Download as PDF
        </button>
      )}
    </>
  );
}
