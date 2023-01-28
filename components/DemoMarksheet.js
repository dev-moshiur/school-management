

import Styles from '../styles/DemoMarksheet.module.scss'

import { useData } from "../contexts/dataContext";

import React from "react";
import jsPDF from "jspdf";
import Loading from "../components/Loading";

export default function ({ sendServer, setShowMarksheet }) {
  const { data, dispatch,showMessage } = useData();
  const serverData = sendServer();
  
  
  
  
  const handlePushing = () => {
    dispatch({
      type: "load",
      value: true,
    });
    fetch("https://school-management-api-six.vercel.app/result", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(serverData),
    }).then((res) => {
      if (res.status == 200) {
        setShowMarksheet(false)
        dispatch({
          type: "load",
          value: false,
        });
        showMessage('Result Submission Successfull')
      } else {
        showMessage('Something went wrong')
      }
    });

    dispatch({
      type: "imptyMarksheet",
    });
  };

  const genaratePDF = () => {
    let doc = new jsPDF("p", "pt", "a4");
    doc.html(document.getElementById("pdfDownload"), {
      callback: (pdf) => {
        pdf.save("result.pdf");
      },
    });
  };
  const handleCancle =()=>{
    setShowMarksheet(false)
    dispatch({
      type: "imptyMarksheet",
    });

  }

  return (
    <div className={Styles.demomarksheet}>
      <div className={Styles.buttons}>
        <button onClick={handleCancle}>Cancel</button>
        <button onClick={genaratePDF}>Download as PDF</button>
        <button onClick={handlePushing}>Send Server</button>
      </div>

      {data.loading && <Loading loading={data.loading}/>}
      <div className={Styles.scroll}>
        <div className={Styles.container} id="pdfDownload">
          <div className={Styles.top}>
            <div className={Styles.schoolName}>Khalshi High School</div>
            <div className={Styles.examName}>{serverData.examtype}</div>
          </div>
          <div className={Styles.middle}>
            <div className={Styles.stdName}>
              <span className={Styles.head}>Name : </span>
              <span className={Styles.value}>{serverData.studentName}</span>
            </div>
            <div className={Styles.divission}>
              <span className={Styles.head}>Group : </span>
              <span className={Styles.value}>{serverData.group}</span>
            </div>
            <div className={Styles.classes}>
              <span className={Styles.head}>Class : </span>
              <span className={Styles.value}>{serverData.className}</span>
            </div>

            <div className={Styles.roll}>
              <span className={Styles.head}>Roll : </span>
              <span className={Styles.value}>{serverData.roll}</span>
            </div>
            <div className={Styles.roll}>
              <span className={Styles.head}>GPA : </span>
              <span className={Styles.value}>{serverData.GPA}</span>
            </div>
            <div className={Styles.roll}>
              <span className={Styles.head}>Result : </span>
              <span className={Styles.value}>{serverData.greade}</span>
            </div>
            <div className={Styles.roll}>
              <span className={Styles.head}>Total Mark : </span>
              <span className={Styles.value}>{serverData.totalMark}</span>
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
                {serverData.subjets.map((items) => (
                  <tr>
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
      </div>
    </div>
  );
}
