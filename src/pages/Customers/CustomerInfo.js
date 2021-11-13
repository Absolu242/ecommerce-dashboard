import MUIDataTable from "mui-datatables";
import React from "react";
import Heading from "../../components/Heading";
import { customersData } from "../../data/customers.data";
import { StudentInfoContainer } from "../../styles/studentInfo.styles.js";

const columns = [
  {
    name: "course_id",
    label: "ID",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "course_name",
    label: "Name",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "course_credit",
    label: "Credit",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "course_mark",
    label: "Mark",
    options: {
      filter: true,
      sort: false,
    },
  },
];

export default function CustomerInfo({ match }) {
  const id = match.params.id;

  let getStudent = customersData.filter((item) => item.name === id);

  let student = getStudent[0];

  const options = {
    filterType: "",
    onRowsDelete: (data) => false,
  };

  return (
    <div>
      <Heading
        title="Student Informations"
        primary="Save"
        secondary="Cancel"
        back={true}
      />
      <StudentInfoContainer>
        <div className="content">
          <div className="content-main">
            <div className="student-info">
              <div className="student-top">
                <span>
                  <img
                    className="img"
                    src="/assets/images/Avatar.png"
                    alt="student"
                  />
                </span>
                <span>
                  <p className="name">{student.name}</p>
                </span>
              </div>

              <div className="infos">
                <div className="infos-list">
                  <p>
                    {" "}
                    <strong>ID:</strong> {student.id}
                  </p>
                  <p>
                    {" "}
                    <strong>Program:</strong> {student.subject}
                  </p>
                  <p>
                    {" "}
                    <strong>Nationality:</strong> Congolese
                  </p>
                  <p>
                    {" "}
                    <strong>Country:</strong> Congo
                  </p>
                </div>

                <div className="infos-list">
                  <p>
                    {" "}
                    <strong>Sex: </strong>Male
                  </p>
                  <p>
                    {" "}
                    <strong>DOB: </strong>12/03/1999
                  </p>
                  <p>
                    {" "}
                    <strong>DOR: </strong>12/09/2017
                  </p>
                  <p>
                    {" "}
                    <strong>Year: </strong>3
                  </p>
                </div>
              </div>
            </div>

            <div className="student-courses">
              <p>Courses </p>
              <MUIDataTable data={[]} columns={columns} options={options} />
            </div>
          </div>

          {/* content on the right side */}
          <div className="content-aside">
            <div className="card">
              <div className="top">
                <p>Contact</p>
                <button>Edit</button>
              </div>
              <div className="main">
                <div className="main-item">
                  <p className="label">Adress</p>
                  <p className="value">
                    Dormitory 7 <br /> Unit 3 <br /> Room 501
                  </p>
                </div>

                <div className="main-item">
                  <p className="label">Email Adress</p>
                  <p className="value">{student.email}</p>
                </div>
                <div className="main-item">
                  <p className="label">Phone Number</p>
                  <p className="value">{student.phoneNumber}</p>
                </div>
              </div>
              <div className="bottom">
                <p>Danger zone</p>
                <button>Delete Student</button>
              </div>
            </div>
          </div>
        </div>
      </StudentInfoContainer>
    </div>
  );
}
