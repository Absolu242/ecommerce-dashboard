import styled from "styled-components";
import { colors } from "./colors";

export const DashboardStyle = styled.div`
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 2rem 0;
  }
  .chart {
    max-width: 500px;
    background-color: #fff;
    padding: 2rem;
    height: 300px;
  }
`;

export const PageTop = styled.div`
  position: relative;
  padding-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 1.5rem;
    color: #7d8592;
  }
  h1 {
    font-size: 2.5rem;
    color: #0a1629;
    padding: 1rem 0;
    font-weight: normal;
  }

  .btn-primary {
    height: 35px;
    padding: 0.2rem 1.5rem;
    display: flex;
    align-items: center;
    border-radius: 4px;
    background-color: ${colors.white};
    color: ${colors.blue};

    img {
      width: 20px;
      margin-right: 0.5rem;
    }
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 10rem;
  gap: 50px;

  @media screen and (max-width: 415px) {
    grid-template-columns: 200px;
    grid-template-rows: repeat(4, 100px);
  }
`;
