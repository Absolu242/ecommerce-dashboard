import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";

const CardItem = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.8rem;
  background-color: #fff;
  box-shadow: 0px 1px 4px rgba(21, 34, 50, 0.08);

  .numbers {
    font-size: 1.4rem;
  }

  .label {
    font-size: 1.2rem;
    color: ${colors.text};
    padding-top: 0.5rem;
  }

  .percent {
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    padding-top: 1rem;
    color: ${(props) => (props.top ? colors.green : colors.danger)};

    img {
      width: 20px;
    }
  }

  .icon {
    background-color: #ecf2ff;
    padding: 1rem;
    border-radius: 50%;
    width: 40px;
  }
`;

export default function DashCard({ numbers, img, label, percent, top }) {
  return (
    <CardItem top={top}>
      <div className="stats">
        <p className="numbers">{numbers}</p>
        <p className="label">{label}</p>
        <p className="percent">
          {percent}%{" "}
          <img src={`/icons/${top ? "upArrow.png" : "downArrow.png"}`} alt="" />
        </p>
      </div>
      <img className="icon" src={img} alt="icon" />
    </CardItem>
  );
}
