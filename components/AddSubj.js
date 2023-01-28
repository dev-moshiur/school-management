


import { useData } from "../contexts/dataContext";
import React from "react";
import Styles from '../styles/AddSubj.module.scss'
import { useRef } from "react";
import { Clear, Add } from "@material-ui/icons";
export default function AddSubj() {
  const name = useRef();
  const type = useRef();

  const max = useRef();
  const form = useRef();

  const { data, dispatch } = useData();

  const adding = (e) => {
    e.preventDefault();
    const addData = {
      name: name.current.value,
      id: name.current.value.split(" ").join(""),
      type: type.current.value,
      max: max.current.value,
      placeHolder: name.current.value,
    };
    dispatch({
      type: "addSubject",
      value: addData,
    });
  };
  const remove = (name) => {
    dispatch({
      type: "removeSubject",
      value: name,
    });
  };
  return (
    <div 
    className={`${Styles.addSubj} ${data.addSubj ? Styles.active : ""}`}>
      <div className={Styles.container}>
        <div className={Styles.heading}>Current Subjects</div>
        <div className={Styles.currentSubj}>
          {data.inputSubjects.map((item) => (
            <div onClick={() => remove(item.name)}>
              <span>{item.name}</span>
              <Clear />
            </div>
          ))}
        </div>
        <div className={Styles.heading}>Add a new Subject</div>
        <div className={Styles.add}>
          <form ref={form} onSubmit={adding}>
            <label htmlFor="name">Subject Name</label>
            <input required type="text" ref={name} list="name" name="name" />
            <datalist id="name">
              {[
                "Bangla",
                "English",
                "Mathmetics",
                "Bangladesh And Global Studies",
                "Science",
                "Information And Communication Techonlogy",
                "Psysics",
                "Chemistry",
                "Biology",
                "Geography",
                "Political Science",
                "History",
                "Islam and Moral Education",
                "Hindu and Moral Education",
                "Agriculture",
                "Higher Mathmetics",
              ].map((elm) => (
                <option value={elm}></option>
              ))}
            </datalist>
            <label htmlFor="type">Subject type</label>
            <input required list="type" type="text" ref={type} name="type" />
            <datalist id="type">
              <option value="main"></option>
              <option value="optional"></option>
            </datalist>
            <label htmlFor="id">Subject ID</label>

            <label htmlFor="max">Maximum Mark</label>
            <input required type="number" list="max" ref={max} name="max" />
            <datalist id="max">
              <option value="100"></option>
              <option value="50"></option>
            </datalist>
            <input name="reset" type="reset" className={Styles.reset} value="Reset" />
            <input type="submit" value={`Add `} />
          </form>
        </div>
        <div
          className={Styles.button}
          onClick={() =>
            dispatch({
              type: "addSubjOpen",
              value: false,
            })
          }
        >
          <Clear />
        </div>
      </div>
    </div>
  );
}
