import jsPDF from "jspdf";
import { Cancel, Clear } from "@material-ui/icons";
import { useState } from "react";
import React from "react";
import Styles from "../styles/StudentExamSheet.module.scss";
export default function StudentExamSheet({
  genaratePDFSheet,
  setexamSheet,
  setactiveMenu,
}) {
  const [selected, setselected] = useState([]);
  const [items, setitems] = useState([
    "Bangla 1st",
    "Bangla 2nd",
    "English 1st",
    "English 2nd",
    "Mathmetics",
    "Psysics",
    "Chemistry",
    "Biology",
    "Bangladesh and Global Studies",
  ]);
  const pushItem = (item) => {
    const other = items.filter((elm) => elm != item);
    setitems(other);
    setselected((preselected) => [...preselected, item]);
  };
  const dropItem = (item) => {
    const other = selected.filter((elm) => elm != item);
    setselected(other);
    setitems((preitems) => [...preitems, item]);
  };

  return (
    <div className={Styles.examSheet}>
      <div className={Styles.heading}>Selected Subjects</div>
      <div className={Styles.selected}>
        {selected.map((elem, index) => (
          <div key={index}>
            <span>{elem}</span>
            <Clear onClick={() => dropItem(elem)} />
          </div>
        ))}
      </div>
      <div className={Styles.heading}>Select Subject</div>
      <div className={Styles.select}>
        {items.map((elem, index) => (
          <span key={index} onClick={() => pushItem(elem)}>
            {elem}
          </span>
        ))}
      </div>
      <button onClick={genaratePDFSheet}>Download Exam Sheet</button>
      <div className={Styles.cancle}>
        <Cancel onClick={() => setactiveMenu("")} />
      </div>
    </div>
  );
}
