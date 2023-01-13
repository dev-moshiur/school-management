export const banner = (
  method,
  func,
  id,
  header = "",
  text = "",
  link = "",
  linkName = ""
) => {
  return {
    popup: "form",
    formHeading: `${method == "post" ? "Add" : "Update"} Photo`,
    formFields: [
      {
        element: "textarea",
        type: "text",
        label: "Header",
        attr: "",
        value: header,
        name: "header",
      },
      {
        element: "textarea",
        type: "text",
        label: "Text",
        attr: "",
        value: text,
        name: "text",
      },

      {
        element: "input",
        type: "text",
        label: "Link",
        attr: "",
        value: link,
        name: "link",
      },
      {
        element: "input",
        type: "text",
        label: "Link Name",
        attr: "",
        value: linkName,
        name: "linkName",
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
          text: e.target.text.value,
          header: e.target.header.value,
          link: e.target.link.value,
          linkName: e.target.linkName.value,

          img: img,
        };
        fetch(
          `https://school-management-api-six.vercel.app/banner/${
            id ? id : ""
          }`,
          {
            headers: { "Content-type": "application/json" },
            method: method,
            body: JSON.stringify(serverData),
          }
        ).then((res) => {
          if (res.status == 200) {
            func("Banner Added");
          } else {
            func("something went wrong");
          }
        });
        e.target.reset();
      };
    },
  };
};
