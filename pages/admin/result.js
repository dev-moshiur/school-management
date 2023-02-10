import React, { useEffect } from "react";
import { useState } from "react";
import Styles from "../../styles/Result.module.scss";
import ResultTable from "../../components/ResultTable";
import Loading from "../../components/Loading";
import { useData } from "../../contexts/dataContext";
import { useRouter } from "next/router";
export default function Result() {
  const [loading, setloading] = useState(false);
  const [allResult, setallResult] = useState([]);
  const { data, showMessage } = useData();
  let router = useRouter();
  useEffect(() => {
    if (!data.isAdmin) {
      router.push("/admin");
      showMessage("Login as an Admin");
    }
  }, []);
  const dataProsess = (data) => {
    let sortedData = data
      .sort(function (a, b) {
        return b.totalMark - a.totalMark;
      })
      .sort(function (a, b) {
        return b.GPA - a.GPA;
      });
    setallResult(sortedData);
    setloading(false);
  };
  const submitHandle = (e) => {
    e.preventDefault();
    setloading(true);

    fetch(
      `${data.url}/result/?schoolName=Khalshi High School&className=${e.target.class.value}&examtype=${e.target.examType.value}`
    )
      .then((res) => res.json())
      .then((data) => dataProsess(data));
  };
  return (
    <div className={Styles.result}>
      <div className={Styles.form}>
        <div className={Styles.heading}>Search Result</div>
        {/* <div className={Styles.title}>
          Know your Opinion,report and so on
        </div> */}
        <form onSubmit={submitHandle}>
          <label htmlFor="examType">Exam Name</label>
          <input required list="examType" type="text" name="examType" />
          <datalist id="examType">
            <option value="Half-Yearly Examination 2023"></option>
            <option value="Model Test Examination 2023"></option>
            <option value="Weekly Test-35 2023"></option>
            <option value="Final Examination 2023"></option>
          </datalist>
          <label htmlFor="class">Class</label>
          <input required type="number" id="class" name="class" />
          <label htmlFor="group">Group</label>
          <label htmlFor="group">Group</label>
          <input list="group" required type="text" name="group" />
          <datalist id="group">
            <option value="science"></option>
            <option value="humanities"></option>
            <option value="business"></option>
            <option value="no group"></option>
          </datalist>
          <input className={Styles.reset} type="reset" value="Reset" />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <Loading loading={loading} />
      <div className={Styles.resultTable}>
        {/* {allResult.length>0 && console.log(allResult)} */}
        {allResult.length > 0 ? <ResultTable data={allResult} /> : ""}
      </div>
    </div>
  );
}
