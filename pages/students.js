import { useState } from "react";
import Admits from "../components/Admits";
import Styles from "../styles/Student.module.scss";
import React from "react";
import Student from "../components/Student";
import StudentExamSheet from "../components/StudentExamSheet";
import jsPDF from "jspdf";
import { Cancel, Clear, Menu } from "@material-ui/icons";
import StudentForm from "../popupForms/student/Student";

export default function Students({ six, seven, eight, nine, ten }) {
  const [activeMenu, setactiveMenu] = useState("");
  const [examSheet, setexamSheet] = useState([]);
  const [pdfData, setpdfData] = useState(six);
  const [formOpen, setFormOpen] = useState(false);

  const creatingFormForPost = () => {
    setFormOpen(true);
  };
  const handleMenuOpen = (text) => {
    if (activeMenu != text) {
      setactiveMenu(text);
    } else {
      setactiveMenu("");
    }
  };
  const genaratePDF = (data) => {
    setpdfData(data);
    let doc = new jsPDF("p", "pt", "a4");
    doc.html(document.getElementById("pdf"), {
      callback: (pdf) => {
        pdf.save("result.pdf");
      },
    });
  };
  const genaratePDFSheet = () => {
    setexamSheet(selected);
    let doc = new jsPDF("p", "pt", "a1");
    doc.html(document.getElementById("examSheet"), {
      callback: (pdf) => {
        pdf.save("result.pdf");
      },
    });
  };

  return (
    <>
      <div className={Styles.students}>
        <div className={Styles.container}>
          <div onClick={creatingFormForPost} className={Styles.add}>
            <button>Add a Student</button>
          </div>

          {[
            [six, "six"],
            [seven, "seven"],
            [eight, "eight"],
            [nine, "nine"],
            [ten, "ten"],
          ].map((classStudents) => (
            <>
              <div className={Styles.heading}>
                <span>Class {classStudents[1]}</span>
                <span onClick={() => handleMenuOpen(classStudents[1])}>
                  {activeMenu == classStudents[1] ? <Clear /> : <Menu />}
                </span>
              </div>
              <div className={Styles.studentContainer}>
                {classStudents[0].map((item) => (
                  <Student key={item._id} studentInfo={item} />
                ))}
                <div
                  className={`${Styles.sheet} ${
                    activeMenu == `${classStudents[1]}sheet`
                      ? Styles.active
                      : ""
                  }`}
                >
                  <StudentExamSheet
                    genaratePDFSheet={genaratePDFSheet}
                    setactiveMenu={setactiveMenu}
                    setexamSheet={setexamSheet}
                  />
                </div>

                <div
                  className={`${Styles.menu} ${
                    activeMenu == `${classStudents[1]}` ? Styles.active : ""
                  }`}
                >
                  <span onClick={() => genaratePDF(classStudents[0])}>
                    Download Admit Card
                  </span>
                  <span
                    onClick={() => {
                      handleMenuOpen(`${classStudents[1]}sheet`);
                      setpdfData(classStudents[0]);
                    }}
                  >
                    Exam Sheet
                  </span>
                  <span>Menu Item</span>
                  <span>Menu Item</span>
                  <Cancel onClick={() => handleMenuOpen(classStudents[1])} />
                </div>
              </div>
            </>
          ))}
          <div className={Styles.displayNone}>
            <div id="pdf" className={Styles.pdf}>
              <Admits admits={pdfData} />
            </div>
            <div id="examSheet" className={Styles.examSheet}>
              <table>
                <thead>
                  <tr>
                    <th>Exam Name</th>
                    {examSheet.map((elm, index) => (
                      <th key={index}>{elm}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {pdfData.map((elm, index) => (
                    <tr key={index}>
                      <td>{elm.username}</td>
                      {examSheet.map((elm, index) => (
                        <td key={index}></td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <StudentForm
        formOpen={formOpen}
        setFormOpen={setFormOpen}
        method={"post"}
      />
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const server = `https://school-management-api-six.vercel.app`;

  const resSix = await fetch(`${server}/person/?className=6`);
  const six = await resSix.json();
  const resSeven = await fetch(`${server}/person/?className=7`);
  const seven = await resSeven.json();
  const resEight = await fetch(`${server}/person/?className=8`);
  const eight = await resEight.json();
  const resNine = await fetch(`${server}/person/?className=9`);
  const nine = await resNine.json();
  const resTen = await fetch(`${server}/person/?className=10`);
  const ten = await resTen.json();
  return {
    props: {
      six,
      seven,
      eight,
      nine,
      ten,
    },
  };
};
