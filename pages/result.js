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
      `${data.url}/result/?schoolName=Khalshi High School&className=${e.target.class.value}&group=${e.target.group.value}&roll=${e.target.roll.value}`
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
        <b>class : 9 </b><br/>
        <b>group : science </b><br/>
        <b>roll : 1</b>
           
        </span>
        <Clear onClick={()=>setsearchMessage(false)}/>
      </div>}
     
        <form onSubmit={submitHandle}>
          <label htmlFor="class">Class</label>
          <input type='number' id="class" name="class" />
          <label htmlFor="croup">Group</label>
          <input type="text" id="group" name="group" />
          <label htmlFor="roll">Roll</label>
          <input type={"number"} name="roll" id="roll" />
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
