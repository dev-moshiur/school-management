export const notice = (method, func, id, headline = "") => {
  return {
    popup: "form",
    formHeading: `${method == "post" ? "Add" : "Update"} Photo`,
    formFields: [
      {
        element: "textarea",
        type: "text",
        label: "Headline",
        attr: "",
        value: headline,
        name: "headline",
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
          headline: e.target.headline.value,
          img: img,
        };
        fetch(
          `https://school-management-api-six.vercel.app/notice/${
            id ? id : ""
          }`,
          {
            headers: { "Content-type": "application/json" },
            method: method,
            body: JSON.stringify(serverData),
          }
        ).then((res) => {
          if (res.status == 200) {
            func("Notice Added");
          } else {
            func("something went worng");
          }
        });
        e.target.reset();
      };
    },
  };
};
