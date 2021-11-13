import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const TopbarContainer = styled.div`
  position: fixed;
  width: 100%;
  background: ${colors.white};
  box-shadow: 0px 1px 4px rgba(21, 34, 50, 0.08);
  z-index: 11111;

  .topbar {
    position: relative;
    &__content {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 1rem 2rem;

      display: flex;
      justify-content: space-between;
      align-items: center;

      &--left {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo {
          padding: 0 1.5rem;
          width: 6.5rem;
        }

        .name {
          font-size: 2rem;
          font-weight: 700;
        }
      }

      &--right {
        display: flex;
        align-items: center;

        .topbar-icon {
          position: relative;
          padding: 0 1.1rem;

          button {
            position: relative;

            &.user {
              display: flex;
              align-items: center;

              p {
                position: relative;
                display: block;
                margin: 0 1rem;
                color: ${colors.text};
              }
            }
            .indice {
              position: absolute;
              background-color: ${colors.blue};
              padding: 0.1rem 0.3rem;
              top: -0.5rem;
              right: -0.5rem;
              border-radius: 50%;
              color: #fff;
              font-size: 1rem;
            }
          }
        }
      }
    }

    &__form {
      position: absolute;
      transform: translateX(72%);
      &--input {
        position: relative;
        input {
          padding: 1.5rem 8rem 1.5rem 5rem;
          width: 35rem;
          border-radius: 12px;
          border: none;
          outline: none;
        }

        .search {
          position: absolute;
          top: 1rem;
          left: 2rem;
        }

        .more {
          position: absolute;
          top: 1.2rem;
          right: 1rem;
        }
      }
    }
  }
`;
