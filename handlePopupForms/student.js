export const student = (
  method,
  func,
  id,
  username = "",
  email = "",
  phone = "",
  className = "",
  group = "",
  roll = "",
  address = ""
) => {
  return {
    popup: "form",
    formHeading: `${method == "post" ? "Add" : "Update"} Photo`,
    formFields: [
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
    ],
    submitFunction: (e) => {
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
          `https://school-management-api-six.vercel.app/person/${
            id ? id : ""
          }`,
          {
            headers: { "Content-type": "application/json" },
            method: method,
            body: JSON.stringify(serverData),
          }
        ).then((res) => {
          if (res.status == 200) {
            func("Student Added");
          } else {
            func("something went worng");
          }
        });
        e.target.reset();
      };
    },
  };
};
