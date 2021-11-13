import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Heading from "../../components/Heading";
import MUIDataTable from "mui-datatables";
import "../../styles/table.style.css";
import { customersData } from "../../data/customers.data";

const Container = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 20px;
  justify-content: center;

  @media (max-width: 1024px) {
    grid-template-columns: 320px 320px;
  }

  @media (max-width: 415px) {
    grid-template-columns: 320px;
  }
`;

const columns = [
  {
    name: "name",
    label: "Name",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "location",
    label: "Location",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "orders",
    label: "Orders",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "spent",
    label: "Spent",
    options: {
      filter: true,
      sort: false,
    },
  },
];

export default function CustomersList() {
  const history = useHistory();

  const options = {
    filterType: "checkbox",
    onRowClick: (data) => getCustomer(data),
    rowHover: true,
    onRowsDelete: (data) => false,
  };

  const getCustomer = (data) => {
    let customerId = data[0];
    history.push(`/customers/${customerId}`);
  };

  // const deleteStudent = (st) => {
  //   let index = st.data[0].index;
  //   let deleted = studentsData.filter((item, i) => i === index);
  //   console.log(deleted);

  //   /** When we delete the table returns the index of the deleted items based on the items displayed on the table.
  //    * Our data source need to whether sync to the table or update our table indexes once the item is deleted.
  //    *
  //    */
  // };

  return (
    <Container>
      <Heading title="Customers" primary="Customer" link={true} />
      <MUIDataTable data={customersData} columns={columns} options={options} />
    </Container>
  );
}
