import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";

const SmallTableContainer = styled.div`
  max-width: 520px;
  width: 100%;
  border-radius: 4px;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(21, 34, 50, 0.08);
  padding: 2rem;

  .about {
    font-size: 1.4rem;
  }

  .table {
    width: 100%;
    padding: 2rem 0;
    thead {
      width: 100%;
      th {
        text-align: left;
        color: ${colors.text};
        font-size: 1.2rem;
        font-weight: 400;
        padding-bottom: 0.5rem;
      }
    }

    tbody {
      position: relative;
      .separator {
        position: absolute;
        max-width: 33vw;
        width: 60%;
        height: 1px;
        background-color: #d7dbec;
        // margin: 1rem 0;
      }
      tr {
        color: ${colors.general};
        font-size: 1.1rem;
        height: 35px;

        td {
          &.img {
            display: flex;
            align-items: center;
            padding-top: 0.3rem;

            img {
              width: 35px;
              padding-right: 0.5rem;
            }
          }
          span {
            padding: 0.5rem 1rem;
            border-radius: 5px;

            &.colored {
              background-color: #c4f8e2;
              color: ${colors.green};
            }

            &.uncolored {
              background-color: #eaecf5;
              color: #5a607f;
            }
          }
        }
      }
    }
  }
`;

export default function SmallTable({ table }) {
  const { columns, image, items } = table;

  let ItemValues = items.map((item, i) => {
    return Object.values(item);
  });

  console.log(ItemValues);
  return (
    <SmallTableContainer>
      <p className="about">Recent Transactions</p>

      <table className="table">
        <thead>
          {columns.map((item, i) => (
            <th key={i}>{item}</th>
          ))}
        </thead>
        <tbody>
          {image ? (
            <>
              {ItemValues.map((values, i) => (
                <>
                  <div className="separator"></div>
                  <tr>
                    <td className="img">
                      <img src={`/images/${values[0]}`} alt="" /> Jessica S
                    </td>
                    {values.slice(2, values.length).map((value, i) => (
                      <>
                        <td>{value}</td>
                      </>
                    ))}
                  </tr>
                </>
              ))}
            </>
          ) : (
            <>
              {ItemValues.map((values) => (
                <>
                  <div className="separator"></div>
                  <tr>
                    {values.slice(0, 3).map((value, i) => (
                      <>
                        <td>{value}</td>
                      </>
                    ))}
                    <td>
                      <span
                        className={
                          values[values.length - 1].toLowerCase() === "paid"
                            ? "colored"
                            : "uncolored"
                        }
                      >
                        {values[values.length - 1]}
                      </span>
                    </td>
                  </tr>
                </>
              ))}
            </>
          )}

          {/* <tr>
           
            <td>24.05.2020</td>
            <td>$123.97</td>
            <td>
              <span className="colored">Paid</span>
            </td>
          </tr> */}
        </tbody>
      </table>
    </SmallTableContainer>
  );
}
