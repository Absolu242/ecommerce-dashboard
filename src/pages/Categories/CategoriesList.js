import React from "react";
import styled from "styled-components";
import Heading from "../../components/Heading";
import { CategoryData } from "../../data/categories.data";
import { colors } from "../../styles/colors";

const Container = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 20px;
  justify-content: center;

  .catlist {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    gap: 20px;

    .catItem {
      width: 320px;
      position: relative;
      background-color: #fff;
      box-shadow: 0px 1px 4px rgba(21, 34, 50, 0.08);
      border-radius: 4px;
      transition: all 0.3s ease;

      img {
        width: inherit;
      }

      .info {
        padding: 1rem;
        .name {
          color: ${colors.text};
          font-size: 1.3rem;
        }

        .count {
          color: ${colors.general};
          font-size: 1.1rem;
        }
      }

      .hover {
        position: absolute;
        width: 100%;
        max-height: 219px;
        height: 100%;
        background: rgba(51, 55, 82, 0.7);
        top: 0;
        z-index: -9999;
        transition: all 0.3s ease;

        button {
          position: relative;
          display: flex;
          align-items: center;
          background-color: #fff;
          padding: 0.8rem 1rem;
          color: ${colors.text};
          border-radius: 4px;
          top: 40%;
          left: 40%;

          img {
            width: 20px;
            padding-right: 0.5rem;
          }
        }
      }

      &:hover {
        .hover {
          z-index: 9999;
        }
      }
    }

    @media (max-width: 765px) {
      grid-template-columns: 1fr;
    }
  }
`;

export default function CategoriesList() {
  return (
    <Container>
      <Heading title="Categories" primary="Category" link={true} />

      <div className="catlist">
        {CategoryData.map((item, i) => (
          <div className="catItem" key={i}>
            <img src={`${item.image}`} alt="" />
            <div className="info">
              <p className="name">{item.name}</p>
              <p className="count">{item.count} items</p>
            </div>

            <div className="hover">
              <button>
                <img src="/icons/edit.png" alt="" /> Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
