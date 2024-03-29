import React from "react";
import styled from "styled-components";
import Heading from "../../components/Heading";
import Reacttable from "../../components/React-table/Reacttable";
import orderData from "../../data/orderData";

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
  const columns = React.useMemo(
    () => [
      {
        Header: "Order",
        accessor: "order",
      },
      {
        Header: "Date",
        accessor: "date",
      },

      {
        Header: "Customer",
        accessor: "customer",
      },
      {
        Header: "Payement Status",
        accessor: "payementstatus",
        Cell: ({ cell: { value } }) => (
          <td>
            <span className={value === "paid" ? "colored" : "uncolored"}>
              {value}
            </span>
          </td>
        ),
      },
      {
        Header: "Order Status",
        accessor: "status",
        Cell: ({ cell: { value } }) => (
          <td>
            <span
              className={
                value === "ready"
                  ? "orange"
                  : value === "shipped"
                  ? "gray"
                  : "blue"
              }
            >
              {value}
            </span>
          </td>
        ),
      },
      {
        Header: "Total",
        accessor: "progress",
        Cell: ({ cell: { value } }) => <td>${value}</td>,
      },
    ],
    []
  );

  const data = React.useMemo(() => orderData(1000), []);

  return (
    <Container>
      <Heading title="Orders" primary="Order" link={true} />

      <div className="wrapper">
        <Reacttable columns={columns} data={data} />
      </div>
    </Container>
  );
}
