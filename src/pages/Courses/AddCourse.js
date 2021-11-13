import styled from "styled-components";
import React from "react";
import { colors } from "../../../styles/colors";
import Heading from "../../../components/Heading";
import { programData } from "../../../data/programs.data";

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
            select {
              width: 100%;
              border-radius: 4px;
              border: solid 1px #d9e1ec;
              padding: 1rem;
              margin-top: 1rem;
            }
          }
        }

        &-div2 {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;

          .input-div {
            width: 50%;
            padding-bottom: 2rem;

            label {
              font-size: 1.4rem;
              color: ${colors.text};
            }
            select {
              width: 100%;
              border-radius: 4px;
              border: solid 1px #d9e1ec;
              padding: 1rem;
              margin-top: 1rem;
            }
          }

          .form-btn {
            padding: 1.2rem 1.5rem;
            display: flex;
            align-items: center;
            border-radius: 4px;
            background-color: ${colors.blue};
            color: ${colors.white} !important;
            margin-left: 1rem;
            margin-top: 0.5rem;
          }
        }

        &-err {
          color: ${colors.danger};
          font-size: 1.2rem;
        }
      }
    }
  }
`;

export default function AddCourse() {
  return (
    <div>
      <Heading
        title="Add Course"
        primary="Save"
        secondary="Cancel"
        back={true}
      />
      <Container>
        <div className="content">
          <div className="content-main">
            <div className="heading">
              <p>Program Informations</p>
            </div>

            <form className="form-wrapper">
              <div className="form-div">
                <div className="input-div">
                  <label>Course ID</label>
                  <input type="number" />
                </div>
                <div className="input-div mg-l">
                  <label>Course Name</label>
                  <input type="text" />
                </div>
                <div className="input-div mg-l">
                  <label>Course Credit</label>
                  <input type="text" />
                </div>

                <div className="input-div mg-l">
                  <label>Course Program</label>
                  <select name="dept" id="">
                    <option value="">Choose Program</option>
                    {programData.map((item, i) => (
                      <option key={i} value={item.program_name}>
                        {item.program_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
