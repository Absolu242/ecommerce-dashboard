import React from "react";
import styled from "styled-components";
import Heading from "../../components/Heading";
import Reacttable from "../../components/React-table/Reacttable";
import productData from "../../data/productData";

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

export default function ProductsList() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Product",
        accessor: "product",
        Cell: ({ cell: { value } }) => (
          <td className="img">
            <img src={`/images/smallProd.png`} alt="" /> {value}
          </td>
        ),
      },
      {
        Header: "Inventory",
        accessor: "inventory",
        Cell: ({ cell: { value } }) => (
          <td>
            {value === "Out of Stock" ? (
              <span className="uncolored">{value}</span>
            ) : (
              value
            )}
          </td>
        ),
      },

      {
        Header: "Color",
        accessor: "color",
      },
      {
        Header: "Total",
        accessor: "progress",
        Cell: ({ cell: { value } }) => <td>${value}</td>,
      },
      {
        Header: "Rating",
        accessor: "rating",
      },
    ],
    []
  );

  const data = React.useMemo(() => productData(1000), []);

  return (
    <Container>
      <Heading title="Products" primary="Product" link={true} />

      <div className="wrapper">
        <Reacttable columns={columns} data={data} />
      </div>
    </Container>
  );
}
