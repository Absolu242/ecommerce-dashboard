import styled from "styled-components";
import React from "react";
import { colors } from "../../styles/colors";
import Heading from "../../components/Heading";

const Container = styled.div`
  position: relative;
  background-color: ${colors.white};
  box-shadow: 0px 1px 4px rgba(21, 34, 50, 0.08);
  border-radius: 4px;
  padding: 2rem;
  width: 100%;

  .content {
    width: 100%;
    .mg-l {
      margin-left: 1rem;
    }
    .mg-t {
      margin-top: 5rem;
    }
    &-main {
      width: 100%;
      //border-bottom: 1px solid #d7dbec;

      .heading {
        p {
          font-size: 1.6rem;
          color: ${colors.general};
          padding-bottom: 0.5rem;
        }
        span {
          font-size: 1.4rem;
          color: ${colors.text};
        }
      }
      //form-wrapper

      .form {
        &-wrapper {
          position: relative;
          width: 100%;
          padding: 3rem 0;
        }

        &-div {
          position: relative;
          width: 100%;
          display: flex;

          .input-div {
            width: 100%;
            padding-bottom: 2rem;

            label {
              font-size: 1.4rem;
              color: ${colors.text};
            }
            input,
            select,
            textarea {
              width: 100%;
              border-radius: 4px;
              border: solid 1px #d9e1ec;
              padding: 1rem;
              margin-top: 1rem;
            }
          }
        }
      }
    }
  }
`;

export default function addCustomer() {
  return (
    <div>
      <Heading
        title="Add Customer"
        primary="Save"
        secondary="Cancel"
        back={true}
      />
      <Container>
        <div className="content">
          <div className="content-main">
            <div className="heading">
              <p>Customer Informations</p>
              <span>General important information about the Customer</span>
            </div>

            <div className="form-wrapper">
              <div className="form-div">
                <div className="input-div">
                  <label>First Name</label>
                  <input type="text" />
                </div>
                <div className="input-div mg-l">
                  <label>Last Name</label>
                  <input type="text" />
                </div>
              </div>
              <div className="form-div">
                <div className="input-div">
                  <label>Email Adress</label>
                  <input type="email" />
                </div>
                <div className="input-div mg-l">
                  <label>Phone Number</label>
                  <input type="text" />
                </div>
              </div>
            </div>
          </div>

          <div className="content-main  mg-t">
            <div className="heading">
              <p>Customer Address</p>
              <span>Shipping address informations</span>
            </div>

            <div className="form-wrapper">
              <div className="form-div">
                <div className="input-div">
                  <label>Address</label>
                  <input type="text" />
                </div>
                <div className="input-div mg-l">
                  <label>Apartment</label>
                  <input type="text" />
                </div>
              </div>
              <div className="form-div">
                <div className="input-div">
                  <label>City</label>
                  <input type="text" />
                </div>
                <div className="form-div mg-l">
                  <div className="input-div">
                    <label>Country</label>
                    <input type="text" />
                  </div>
                  <div className="input-div mg-l">
                    <label>Postal Code</label>
                    <input type="text" />
                  </div>
                </div>
              </div>
              <div className="form-div">
                <div className="input-div">
                  <label>Phone</label>
                  <input type="text" />
                </div>
                <div className="input-div mg-l"></div>
              </div>
            </div>
          </div>

          <div className="content-main  mg-t">
            <div className="heading">
              <p>Customer Notes</p>
              <span>Add notes about the customer</span>
            </div>

            <div className="form-wrapper">
              <div className="form-div">
                <div className="input-div">
                  <label>Notes</label>
                  <textarea
                    name="notes"
                    id=""
                    cols="30"
                    rows="5"
                    placeholder="Add notes about the customer"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
