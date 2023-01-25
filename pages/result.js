import React from "react";
import { useState, useEffect } from "react";
import Styles from "../styles/Result.module.scss";
import Marksheet from "../components/Marksheet";
import Loading from "../components/Loading";
import { useData } from "../contexts/dataContext";
import { Clear } from "@material-ui/icons";
export default function Result() {
  const [searchMessage, setsearchMessage] = useState(true);
  
  const [result, setresult] = useState([]);
  const [loading, setloading] = useState(false);
  const { data } = useData();
  

  const submitHandle = (e) => {
    e.preventDefault();
    setloading(true);
    fetch(
      `${data.url}/result/?schoolName=Khalshi High School&className=${e.target.class.value}&group=${e.target.group.value}&roll=${e.target.examType.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        setresult(data);
        setloading(false);
        console.log(data);
      })
      .catch(err=>console.log(err))
        
      
  };
  return (
    <div className={Styles.result}>
      <div className={Styles.form}>
        <div className={Styles.heading}>Search Result</div>
        {/* <div className={Styles.title}>
          Know your Opinion,report and so on
        </div> */}
        {searchMessage && 
       <div className={Styles.message}>
        <span>
        For testing search result with  <br/>
        <b>Exam Name : Half-Yearly Examination 2023 </b><br/>
        <b>class : 10 </b><br/>
        <b>group : science </b><br/>
        <b>roll : 2</b>
           
        </span>
        <Clear onClick={()=>setsearchMessage(false)}/>
      </div>}
     
        <form onSubmit={submitHandle}>
          <label htmlFor="examType">Exam Name</label>
          <input required list='examType' type='text'  name="examType" />
          <datalist id="examType">
            <option value="Half-Yearly Examination 2023"></option>
            <option value="Model Test Examination 2023"></option>
            <option value="Weekly Test-35 2023"></option>
            <option value="Final Examination 2023"></option>
          </datalist>
          <label htmlFor="class">Class</label>
          <input required type='number' id="class" name="class" />
          <label htmlFor="group">Group</label>
          <input list="group" required type="text"  name="group" />
          <datalist id="group">
          <option value="science"></option>
          <option value="humanities"></option>
          <option value="business"></option>
          <option value="no group"></option>
        </datalist>
          <label htmlFor="roll">Roll</label>
          <input required type={"number"} name="roll" id="roll" />
          <input className={Styles.reset} type="reset" value="Reset" />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <Loading loading={loading} />
      <div className={Styles.resultTable}>
        {/* {allResult.length>0 && console.log(allResult)} */}
        {result.length > 0 ? <Marksheet data={result} /> : ""}
      </div>
    </div>
  );
}
