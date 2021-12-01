import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Heading from "../../components/Heading";
import MUIDataTable from "mui-datatables";
import "../../styles/table.style.css";
import { customersData } from "../../data/customers.data";
import Reacttable from "../../components/React-table/Reacttable";

const Container = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 20px;
  justify-content: center;

  .wrapper {
    background-color: #fff;
    box-shadow: 0px 1px 4px rgba(21, 34, 50, 0.08);
    padding: 2rem;
  }
`;

export default function OrdersList() {
  return (
    <Container>
      <Heading title="Orders" primary="Order" link={true} />

      <div className="wrapper">
        <Reacttable />
      </div>
    </Container>
  );
}
