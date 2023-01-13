import React from "react";
import { useData } from "../contexts/dataContext";
import Styles from "../styles/Addmission.module.scss";
import { useState } from "react";
import Loading from "../components/Loading";
export default function Addmission() {
  const [loading, setloading] = useState(false);
  const { data, showMessage } = useData();

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    const serverData = new FormData();
    serverData.append("profile", e.target.profile.files[0]);
    serverData.append("applicantName", e.target.name.value);
    serverData.append("PECRoll", e.target.pec.value);
    serverData.append("GPA", e.target.gpa.value);
    serverData.append("preInstitute", e.target.institute.value);
    serverData.append("phone", e.target.phone.value);
    serverData.append("address", e.target.adress.value);
    serverData.append("gender", e.target.gender.value);
    fetch(`${data.url}/addmission`, {
      method: "post",
      body: serverData,
    }).then((res) => {
      if (res.status == 200) {
        showMessage("Massege sent successfully");
        setloading(false);
      } else {
        showMessage("something went wrong");
        setloading(false);
      }
    });
    e.target.reset();
  };

  return (
    <div className={Styles.addmission}>
      <div className={Styles.heading}>Apply for Addmission</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="pec">PEC Roll</label>
        <input type="number" name="pec" />
        <label htmlFor="gpa">GPA</label>
        <input type="number" name="gpa" />
        <label htmlFor="institute">Previous Institute</label>
        <input type="text" name="institute" />
        <label htmlFor="phone">Phone Number</label>
        <input type="number" name="phone" />
        <label htmlFor="adress">Address</label>
        <input type="text" name="adress" />
        <label htmlFor="profile">PEC Result Sheet</label>
        <input type="file" name="profile" />

        <label htmlFor="gender">Gender</label>
        <div>
          <input
            type="radio"
            value={"male"}
            defaultChecked
            required
            name="gender"
          />{" "}
          <span>Male</span>
        </div>
        <div>
          <input type="radio" value={"female"} required name="gender" />{" "}
          <span>Female</span>
        </div>
        <Loading loading={loading} />

        <input type="reset" value="Reset" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
