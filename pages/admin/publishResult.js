


import React from "react";

import { useRef, useState,useEffect } from "react";

import { useData } from "../../contexts/dataContext";
import subjectMap from "../../makingMarksheetFunction/subjectMap";
import { useRouter } from 'next/router'
import DemoMarksheet from '../../components/DemoMarksheet'
import AddSubj from '../../components/AddSubj'
import Styles from '../../styles/PublishResult.module.scss'


export default function AdminInput() {
  const [showMarksheet, setShowMarksheet] = useState(false);
  const { data, dispatch } = useData();
  let examtype = useRef();
  let className = useRef();
  let group = useRef();
  let studentName = useRef();
  let roll = useRef();

  const makeMarksheet = () => {
    data.inputSubjects.forEach((item) => subjectMap(item, dispatch));
  };
  
  const fixGrade = (gpa) => {
    if (gpa == 5) {
      return "A+";
    } else if (gpa < 5 && gpa >= 4) {
      return "A";
    } else if (gpa < 4 && gpa >= 3.5) {
      return "A-";
    } else if (gpa < 3.5 && gpa >= 3) {
      return "B";
    } else if (gpa < 3 && gpa >= 2) {
      return "C";
    } else if (gpa < 2 && gpa >= 1) {
      return "D";
    } else {
      return "F";
    }
  };
  const addSubjFormActive = () => {
    console.log("first")
    dispatch({
        type: "addSubjOpen",
        value: true,
      })
  };
  const submitAction = () => {
    makeMarksheet();
    console.log(data.results[0]);

    fixGrade(
      !data.fail &&
        (
          (data.gpa / data.subjectCount > 5
            ? 5
            : data.gpa / data.subjectCount) / 1
        ).toFixed(2)
    );
    setShowMarksheet(true);
  };
  let router= useRouter()
  useEffect(() => {
    if (!data.isAdmin) {
      
      router.push('/admin')
    }
    
  }, []);
  function sendServer() {
    return {
      studentName: studentName.current.value,
      schoolName: `Khalshi High School`,
      examtype: examtype.current.value,
      group: group.current.value,
      className: className.current.value,
      roll: roll.current.value / 1,

      GPA:
        !data.fail &&
        (
          (data.gpa / data.subjectCount > 5
            ? 5
            : data.gpa / data.subjectCount) / 1
        ).toFixed(2),
      greade: fixGrade(!data.fail &&
        (
          (data.gpa / data.subjectCount > 5
            ? 5
            : data.gpa / data.subjectCount) / 1
        ).toFixed(2)),
      totalMark: data.total,
      subjectCount: data.subjInfo.length,
      subjets: data.subjInfo,
    };
  };

  return (
    <div className={Styles.adminInput}>
      <div className={Styles.header}>Input Data of Every student</div>
      <div className={Styles.heading}>Basic Information</div>
      <form className={Styles.basicInfo}>
        <input
          placeholder="Examination Type Or Name"
          ref={examtype}
          required
          list="examType"
          type="text"
          name="examType"
        />
        <datalist id="examType">
          <option value="Half-Yearly Examination 2023"></option>
          <option value="Model Test Examination 2023"></option>
          <option value="Weekly Test-35 2023"></option>
          <option value="Final Examination 2023"></option>
        </datalist>

        <input
          type="number"
          required
          name="className"
          ref={className}
          placeholder="Class"
        />
        <input
          type="text"
          required
          name="group"
          ref={group}
          list="group"
          placeholder="Group"
        />
        <datalist id="group">
          <option value="science"></option>
          <option value="humanities"></option>
          <option value="business"></option>
          <option value="no group"></option>
        </datalist>
        <input type="reset" value={"Reset"} placeholder="Reset" />
      </form>
      <div className={Styles.heading}>Subject Information</div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          
        }}
      >
        <label htmlFor="studentName">Student Name</label>
        <input required ref={studentName} name="studentName" type="text" />
        <label htmlFor="roll">Roll</label>
        <input required ref={roll} name="roll" type="number" />
        {data.inputSubjects.map((item) => (
          <>
            <label htmlFor={item.name}>{item.name}</label>
            <input
              type={
                (item.name === "Bangla" || item.name === "English")
                  ? "text"
                  : "number"
              }
              required
              name={item.name}
              max={item.max}
              status={item.type}
              id={item.id}
              placeHolder={item.placeHolder}
            />
          </>
        ))}
        <button onClick={addSubjFormActive}>Add more subjects</button>
        <input
          type="reset"
          className={Styles.reset}
          value={"Reset"}
          placeholder="Reset"
        />
        <input type="submit" value="Submit" onClick={submitAction}/>
      </form>
      <AddSubj/>

      {showMarksheet && (
        <DemoMarksheet
          sendServer={sendServer}
          setShowMarksheet={setShowMarksheet}
        />
      )}
    </div>
  );
}


