export const teacher = (
  method,
  func,
  id,
  name = "",
  email = "",
  phone = "",
  qualification = "",
  joinDate = joinDate,
  address = "",
  post = ""
) => {
  return {
    popup: "form",
    formHeading: `${method == "post" ? "Add" : "Update"} Photo`,
    formFields: [
      {
        element: "input",
        type: "text",
        label: "Teacher Name",
        attr: "",
        value: name,
        name: "name",
      },
      {
        element: "input",
        type: "text",
        label: "Post",
        attr: "",
        value: post,
        name: "post",
      },
      {
        element: "input",
        type: "email",
        label: " Email",
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
        type: "text",
        label: "Qualification",
        attr: "",
        value: qualification,
        name: "qualification",
      },
      {
        element: "input",
        type: "date",
        label: "Join Date",
        attr: "",
        value: joinDate,
        name: "joinDate",
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
          name: e.target.name.value,
          email: e.target.email.value,
          phone: e.target.phone.value,
          post: e.target.post.value,
          qualification: e.target.qualification.value,
          joinDate: e.target.joinDate.value,
          address: e.target.address.value,
          img: img,
        };
        fetch(
          `http://localhost:8002https://school-management-api-six.vercel.app/teacher/${
            id ? id : ""
          }`,
          {
            headers: { "Content-type": "application/json" },
            method: method,
            body: JSON.stringify(serverData),
          }
        ).then((res) => {
          if (res.status == 200) {
            func("Teacher Added");
          } else {
            func("something went worng");
          }
        });
        e.target.reset();
      };
    },
  };
};
