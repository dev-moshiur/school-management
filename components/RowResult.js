import React from "react";
import Styles from "../styles/RowResult.module.scss";
import { useState } from "react";

export default function RowResult({ data, index, edit }) {
  const [deleted, setdeleted] = useState(false);

  const deliting = (id) => {
    fetch(`${server}/result/${id}`, {
      method: "delete",
    }).then((respo) => {
      if (respo.status == 200) {
        setdeleted(true);
      }
    });
  };
  return (
    <tr className={`${Styles.rowResult} ${deleted ? Styles.deleted : ""}`}>
      {edit && (
        <>
          <td onClick={() => deliting(data._id)}>Delete</td>
          <td>{data.className}</td>
          <td>{data.group}</td>
        </>
      )}
      <td>{data.roll}</td>
      <td>{data.studentName}</td>

      {data.subjets.map((items) => (
        <>
          <td>{items.subject}</td>
          <td>{items.subGreate}</td>
          <td>{items.subMarks}</td>
          <td>{items.subGpa}</td>
        </>
      ))}
      <td>{data.totalMark}</td>
      <td>{data.GPA}</td>
      <td>{index + 1}</td>
    </tr>
  );
}
