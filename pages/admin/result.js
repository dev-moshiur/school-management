import React,{useEffect}  from "react";
import { useState } from "react";
import Styles from "../../styles/Result.module.scss";
import ResultTable from "../../components/ResultTable";
import Loading from "../../components/Loading";
import { useData } from "../../contexts/dataContext";
import { useRouter } from 'next/router'
export default function Result() {
  const [loading, setloading] = useState(false);
  const [allResult, setallResult] = useState([]);
  const { data } = useData();
  let router= useRouter()
  useEffect(() => {
    if (!data.isAdmin) {
      
      router.push('/admin')
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
      `${data.url}/result/?schoolName=Khalshi High School&className=${e.target.class.value}`
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
          <label htmlFor="class">Class</label>
          <input type="number" id="class" name="class" />
          <label htmlFor="croup">Group</label>
          <input type="text" id="group" name="group" />
          {/* <label htmlFor="roll">Roll</label>
          <input type={'number'} name="roll" id="roll" /> */}
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
