import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../styles/colors";

const ContainerTop = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;

  .back {
    display: flex;
    align-items: center;
    color: ${colors.text};
    padding: 1rem 0;
    img {
      padding-right: 0.5rem;
    }
  }

  .heading {
    font-size: 2.4rem;
    font-weight: 400;
    color: ${colors.general};
  }

  .actions {
    display: flex;
  }

  .btn {
    &-secondary {
      position: relative;
      height: 40px;
      padding: 0.5rem 2.5rem;
      border-radius: 4px;
      color: ${colors.blue};
      background-color: ${colors.white};
      border: solid 1px #d7dbec;
      margin-right: 1rem;
    }

    &-primary {
      height: 40px;
      padding: 1rem 1.5rem;
      display: flex;
      align-items: center;
      border-radius: 4px;
      background-color: ${colors.blue};
      color: ${colors.white};
    }
  }
`;
export default function Heading({ primary, secondary, link, title, back }) {
  let url = `${primary}s/add${primary}`;

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      <ContainerTop>
        <div>
          {back && (
            <button className="back" onClick={() => goBack()}>
              <img src="/icons/back.svg" alt="icon" /> Back
            </button>
          )}
          <div className="heading">{title}</div>
        </div>
        <div className="actions">
          {secondary && <button className="btn-secondary">{secondary}</button>}
          {primary && link ? (
            <Link to={`/${url.toLowerCase()}`}>
              <button className="btn-primary">
                {" "}
                <img src="/icons/plus.svg" alt="icon" /> Add {primary}
              </button>
            </Link>
          ) : (
            primary && <button className="btn-primary">{primary}</button>
          )}
        </div>
      </ContainerTop>
    </>
  );
}
