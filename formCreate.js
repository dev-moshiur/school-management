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
      const serverData = new FormData();
      serverData.append("profile", e.target.profile.files[0]);
      serverData.append("header", e.target.header.value);
      serverData.append("text", e.target.text.value);
      serverData.append("link", e.target.link.value);
      serverData.append("linkName", e.target.linkName.value);

      fetch(
        `https://school-management-api-six.vercel.app/banner/${
          id ? id : ""
        }`,
        {
          method: method,
          body: serverData,
        }
      ).then((res) => {
        if (res.status == 200) {
          func("Banner Added");
        } else {
          func("something went worng");
        }
      });
    },
  };
};
export const newss = (method, func, id, headline = "", data = "") => {
  return {
    popup: "form",
    formHeading: `${method == "post" ? "Add" : "Update"} News`,
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
      const serverData = new FormData();
      serverData.append("profile", e.target.profile.files[0]);
      serverData.append("data", e.target.data.value);
      serverData.append("headline", e.target.headline.value);
      fetch(
        `https://school-management-api-six.vercel.app/news/${
          id ? id : ""
        }`,
        {
          method: method,
          body: serverData,
        }
      ).then((res) => {
        if (res.status == 200) {
          func("News Added");
        } else {
          func("something went worng");
        }
      });
    },
  };
};
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
    formHeading: `${method == "post" ? "Add" : "Update"} Student`,
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
      const serverData = new FormData();
      serverData.append("profile", e.target.profile.files[0]);
      serverData.append("username", e.target.username.value);
      serverData.append("email", e.target.email.value);
      serverData.append("phone", e.target.phone.value);
      serverData.append("className", e.target.className.value);
      serverData.append("group", e.target.group.value);
      serverData.append("roll", e.target.roll.value);
      serverData.append("address", e.target.address.value);

      fetch(
        `https://school-management-api-six.vercel.app/person/${
          id ? id : ""
        }`,
        {
          method: method,
          body: serverData,
        }
      ).then((res) => {
        if (res.status == 200) {
          func("Student Added");
        } else {
          func("something went worng");
        }
      });
    },
  };
};
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
    formHeading: `${method == "post" ? "Add" : "Update"} Teacher`,
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
      const serverData = new FormData();
      serverData.append("profile", e.target.profile.files[0]);
      serverData.append("name", e.target.name.value);
      serverData.append("email", e.target.email.value);
      serverData.append("phone", e.target.phone.value);
      serverData.append("post", e.target.post.value);
      serverData.append("qualification", e.target.qualification.value);
      serverData.append("joinDate", e.target.joinDate.value);
      serverData.append("address", e.target.address.value);

      fetch(
        `https://school-management-api-six.vercel.app/teacher/${
          id ? id : ""
        }`,
        {
          method,
          body: serverData,
        }
      ).then((res) => {
        if (res.status == 200) {
          func("Teacher Added");
        } else {
          func("something went worng");
        }
      });
    },
  };
};
export const notice = (method, func, id, headline = "") => {
  return {
    popup: "form",
    formHeading: `${method == "post" ? "Add" : "Update"} Notice`,
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
      const serverData = new FormData();
      serverData.append("profile", e.target.profile.files[0]);
      serverData.append("headline", e.target.headline.value);

      fetch(
        `https://school-management-api-six.vercel.app/notice${
          id ? id : ""
        }`,
        {
          method: method,
          body: serverData,
        }
      ).then((res) => {
        if (res.status == 200) {
          func("Notice Added");
        } else {
          func(`something went worng tyu ${method}`);
          console.log(server);
        }
      });
    },
  };
};
