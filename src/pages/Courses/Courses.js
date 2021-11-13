import MUIDataTable from "mui-datatables";
import React from "react";
import styled from "styled-components";
import Heading from "../../../components/Heading";
import { coursesData } from "../../../data/course.data";
import { colors } from "../../../styles/colors";

const Container = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 20px;
  justify-content: center;

  .dept {
    &-add {
      display: flex;
      align-items: center;
    }
    &-input {
      max-width: 50rem;
      width: 100%;
      border-radius: 4px;
      border: solid 1px #d9e1ec;
      padding: 1rem;
    }

    &-btn {
      padding: 1rem 1.5rem;
      display: flex;
      align-items: center;
      border-radius: 4px;
      background-color: ${colors.blue};
      color: ${colors.white};
      margin-left: 1rem;
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: 320px 320px;
  }

  @media (max-width: 415px) {
    grid-template-columns: 320px;
  }
`;

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
      sort: true,
    },
  },
  {
    name: "course_credit",
    label: "Credit",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "course_program",
    label: "program",
    options: {
      filter: true,
      sort: true,
    },
  },
];
export default function Courses() {
  const options = {
    filterType: "checkbox",
  };

  return (
    <div>
      <Container>
        <Heading title="Courses" link={true} primary="Course" />

        <MUIDataTable data={coursesData} columns={columns} options={options} />
      </Container>
    </div>
  );
}
