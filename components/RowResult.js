import React from "react";
import Styles from "../styles/RowResult.module.scss";
import { useState } from "react";
import { Delete } from "@material-ui/icons";
import { useData } from "../contexts/dataContext";
export default function RowResult({ result, index, edit }) {
  const {data,showMessage} = useData()
  const [deleted, setdeleted] = useState(false);
  const [loading, setLoading] = useState(false)

  const deliting = (id) => {
    setLoading(true)
    fetch(`${data.url}/result/${id}`, {
      method: "delete",
    }).then((respo) => {
      if (respo.status == 200) {
        setdeleted(true);
        showMessage('Deleted')
      }
      setLoading(false)
    });
  };
  return (
    <tr className={`${Styles.rowResult} ${deleted ? Styles.deleted : ""}`}>
      {edit && (
        <>
          <td onClick={() => deliting(result._id) } className={Styles.action}>{loading ?'load':<Delete/>}</td>
          <td>{result.className}</td>
          <td>{result.group}</td>
        </>
      )}
      <td>{result.roll}</td>
      <td>{result.studentName}</td>

      {result.subjets.map((items) => (
        <>
          <td>{items.subject}</td>
          <td>{items.subGreate}</td>
          <td>{items.subMarks}</td>
          <td>{items.subGpa}</td>
        </>
      ))}
      <td>{result.totalMark}</td>
      <td>{result.GPA}</td>
      <td>{index + 1}</td>
    </tr>
  );
}
