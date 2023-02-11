import React from "react";
import { useState, useEffect } from "react";
import Styles from "../../styles/Result.module.scss";
import ResultTable from "../../components/ResultTable";
import Loading from "../../components/Loading";
import { useData } from "../../contexts/dataContext";
import { useRouter } from "next/router";
export default function Result() {
  const [loading, setloading] = useState(false);
  const [allResult, setallResult] = useState([]);
  const { isAdmin, showMessage,url } = useData();
  let router = useRouter();
  useEffect(() => {
    if (!isAdmin.isAdmin) {
      router.push("/admin");
      showMessage("Login as an Admin");
    }
  }, []);

  const dataProsess = (data) => {
    let sortedData = data
      .sort(function (a, b) {
        return b.roll - a.roll;
      })
      .sort(function (a, b) {
        return b.group - a.group;
      })
      .sort(function (a, b) {
        return b.className - a.className;
      });
    setallResult(sortedData);
    setloading(false);
  };
  useEffect(() => {
    setloading(true);
    fetch(`${url}/result/?schoolName=Khalshi High School`)
      .then((res) => res.json())
      .then((data) => dataProsess(data));
  }, []);

  return (
    <div className={Styles.result}>
      <Loading loading={loading} />
      <div className={Styles.resultTable}>
        {/* {allResult.length>0 && console.log(allResult)} */}
        {allResult.length > 0 ? (
          <ResultTable edit={true} data={allResult} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
