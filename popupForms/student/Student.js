import React, { useState } from "react";
import Loading from "../../components/Loading";
import Styles from "../../styles/PopupForm.module.scss";

import { useData } from "../../contexts/dataContext";
import { Cancel } from "@material-ui/icons";
export default function Student({
  formOpen,
  setFormOpen,
  method,
  id,
  username = "",
  email = "",
  phone = "",
  className = "",
  group = "",
  roll = "",
  address = "",
}) {
  const [loading, setLoading] = useState(false);
  const { showMessage } = useData();
  const formHeading = `${method == "post" ? "Add" : "Update"} Photo`;

  const formFields = [
    {
      element: "input",
      type: "text",
      label: "Student Name",
      attr: "",
      value: username,
      name: "username",
    },
    {
      element: "input",
      type: "email",
      label: "Student Email",
      attr: "",
      value: email,
      name: "email",
    },
    {
      element: "input",
      type: "number",
      label: "Phone number",
      attr: "",
      value: phone,
      name: "phone",
    },
    {
      element: "input",
      type: "number",
      label: "Class",
      attr: "",
      value: className,
      name: "className",
    },
    {
      element: "input",
      type: "text",
      label: "Group",
      attr: "",
      value: group,
      name: "group",
      list: ["Science", "Humanities"],
    },
    {
      element: "input",
      type: "number",
      label: "Roll",
      attr: "",
      value: roll,
      name: "roll",
    },

    {
      element: "textarea",
      label: "Address",
      attr: "",
      value: address,
      name: "address",
    },
    {
      element: "input",
      label: "Add Image",
      attr: "",
      name: "profile",
      type: "file",
    },
  ];
  const submitFunction = (e) => {
    e.preventDefault();
    setLoading(true);
    if (e.target.profile.files[0]) {
      const imageData = new FormData();
      imageData.append("file", e.target.profile.files[0]);
      imageData.append("upload_preset", "school-management");
      imageData.append("cloud_name", "dbop0bxeu");

      fetch(`https://api.cloudinary.com/v1_1/dbop0bxeu/image/upload`, {
        method: "post",
        body: imageData,
      })
        .then((res) => res.json())
        .then((data) => {
          submitServer(data.url.split(" ").join(""));
        });
    } else {
      submitServer("");
    }

    const submitServer = (img) => {
      const serverData = {
        username: e.target.username.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        className: e.target.className.value,
        group: e.target.group.value,
        roll: e.target.roll.value,
        address: e.target.address.value,

        img: img,
      };
      fetch(
        `https://school-management-api-six.vercel.app/person/${id ? id : ""}`,
        {
          headers: { "Content-type": "application/json" },
          method: method,
          body: JSON.stringify(serverData),
        }
      ).then((res) => {
        setLoading(false);
        if (res.status == 200) {
          showMessage("Student Added");
        } else {
          showMessage("Something went worng");
        }
      });
      e.target.reset();
    };
  };
  return (
    <div className={`${Styles.PopupForm} ${formOpen ? Styles.active : ""}`}>
      <div className={Styles.container}>
        <div className={Styles.heading}>{formHeading}</div>
        <Loading loading={loading} />
        <form onSubmit={submitFunction}>
          {formFields.map((item) => (
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
        <div onClick={() => setFormOpen(false)} className={Styles.cancel}>
          <Cancel />
        </div>
      </div>
    </div>
  );
}
