import React from "react";
import Styles from "../styles/PopupForm.module.scss";
import { useData } from "../contexts/dataContext";
import { Cancel } from "@material-ui/icons";

import Loading from "./Loading";
export default function PopupForm() {
  const { data, dispatch } = useData();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "load",
      value: true,
    });
    data.submitFunction(e);
  };

  return (
    <div
      className={`${Styles.PopupForm} ${
        data.popup == "form" ? Styles.active : ""
      }`}
    >
      {data.formFields && (
        <div className={Styles.container}>
          <div className={Styles.heading}>{data.formHeading}</div>
          <Loading loading={data.loading} />
          <form onSubmit={handleSubmit}>
            {data.formFields.map((item) => (
              <>
                <label htmlFor={item.id}>{item.label}</label>
                {item.element == "input" && item.type != "file" && (
                  <input
                    type={item.type}
                    name={item.name}
                    defaultValue={item.value}
                  />
                )}
                {item.element == "input" && item.type == "file" && (
                  <input list={item.name} type={item.type} name={item.name} />
                )}
                {item.element == "textarea" && (
                  <textarea
                    name={item.name}
                    cols="30"
                    defaultValue={item.value}
                    rows="10"
                  ></textarea>
                )}
              </>
            ))}

            <input className={Styles.reset} type="reset" value="Reset" />
            <input className={Styles.reset} type="submit" value="Submit" />
          </form>
          <div
            onClick={() =>
              dispatch({
                type: "createForm",
                value: {
                  popup: "",
                  formFields: [],
                  submitFunction: (e) => {
                    e.preventDefault();
                  },
                },
              })
            }
            className={Styles.cancel}
          >
            <Cancel />
          </div>
        </div>
      )}
    </div>
  );
}
