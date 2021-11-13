import MUIDataTable from "mui-datatables";
import React from "react";
import Heading from "../../components/Heading";
import { customersData } from "../../data/customers.data";
import { ordersData } from "../../data/orders.data";
import { StudentInfoContainer } from "../../styles/studentInfo.styles.js";

const columns = [
  {
    name: "order_id",
    label: "ID",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "date",
    label: "Date",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "order_status",
    label: "Status",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "price",
    label: "Price",
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
        title="Customer Informations"
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
                  <p>Ireland</p>
                  <p>{student.orders} Orders</p>
                  <p>Customer for 2 years</p>
                </span>
              </div>

              <div className="review">starts</div>
            </div>

            <div className="customer-courses">
              <p>Customer Orders </p>
              <MUIDataTable
                data={ordersData}
                columns={columns}
                options={options}
              />
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

            <div className="card2">
              <div className="top">
                <p>Tags</p>
              </div>

              <div className="input-div">
                <label>Add Tags</label> <br />
                <input type="text" placeholder="Enter tag Name" />
              </div>
            </div>
          </div>
        </div>
      </StudentInfoContainer>
    </div>
  );
}
