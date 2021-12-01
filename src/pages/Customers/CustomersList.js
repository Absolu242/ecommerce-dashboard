import React from "react";
import styled from "styled-components";
import Heading from "../../components/Heading";
import Reacttable from "../../components/React-table/Reacttable";
import customerData from "../../data/customerData";

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

export default function CustomersList() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "product",
        Cell: ({ cell: { value } }) => (
          <td className="img">
            <span className="char">{value.charAt(0)}</span> {value}
          </td>
        ),
      },
      {
        Header: "Location",
        accessor: "location",
      },

      {
        Header: "Orders",
        accessor: "orders",
      },
      {
        Header: "Spent",
        accessor: "spent",
        Cell: ({ cell: { value } }) => <td>${value}</td>,
      },
    ],
    []
  );

  const data = React.useMemo(() => customerData(1000), []);

  return (
    <Container>
      <Heading title="Customers" primary="Customer" link={true} />

      <div className="wrapper">
        <Reacttable columns={columns} data={data} />
      </div>
    </Container>
  );
}
