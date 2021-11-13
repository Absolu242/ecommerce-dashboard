import React from "react";
import styled from "styled-components";
import DashCard from "../components/DashCard";

const PageTitle = styled.div`
  position: relative;
  padding-bottom: 3rem;
  p {
    font-size: 1.5rem;
    color: #7d8592;
  }
  h1 {
    font-size: 3rem;
    color: #0a1629;
    padding: 1rem 0;
    font-weight: normal;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 10rem;
  gap: 50px;

  @media screen and (max-width: 415px) {
    grid-template-columns: 200px;
    grid-template-rows: repeat(4, 100px);
  }
`;

const items = [
  {
    img: "/assets/icons/em-a.svg",
    label: "Total Students",
    stats: "5,000",
  },
  {
    img: "/assets/icons/teach-a.svg",
    label: "Total Teachers",
    stats: "100",
  },
  {
    img: "/assets/icons/event-a.svg",
    label: "Total Events",
    stats: "600",
  },
];

export default function Dashboard() {
  return (
    <>
      <PageTitle>
        <p>Welcome back, Rahan</p>
        <h1>Dashboard</h1>
      </PageTitle>
      <CardContainer>
        {items.map((item, i) => (
          <DashCard
            key={i}
            img={item.img}
            label={item.label}
            stats={item.stats}
          />
        ))}
      </CardContainer>
    </>
  );
}
