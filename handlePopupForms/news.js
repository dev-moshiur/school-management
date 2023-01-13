export const newss = (method, func, id, headline = "", data = "") => {
  return {
    popup: "form",
    formHeading: `${method == "post" ? "Add" : "Update"} Photo`,
    formFields: [
      {
        element: "textarea",
        type: "text",
        label: "Headline",

        value: headline,
        attr: {
          required: true,
        },
        name: "headline",
      },

      {
        element: "textarea",
        label: "Details",
        attr: {
          required: true,
        },
        value: data,
        name: "data",
      },
      {
        element: "input",
        label: "Add A File",
        type: "file",
        name: "profile",
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
          data: e.target.data.value,
          img: img,
        };
        fetch(
          `https://school-management-api-six.vercel.app/news/${
            id ? id : ""
          }`,
          {
            headers: { "Content-type": "application/json" },
            method: method,
            body: JSON.stringify(serverData),
          }
        ).then((res) => {
          if (res.status == 200) {
            func("News Added");
          } else {
            func("something went worng");
          }
        });
        e.target.reset();
      };
    },
  };
};
