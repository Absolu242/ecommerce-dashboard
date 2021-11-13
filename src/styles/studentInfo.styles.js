import styled from "styled-components";
import { colors } from "./colors";

export const StudentInfoContainer = styled.div`
  position: relative;

  .content {
    display: grid;
    grid-template-columns: 1fr 35rem;
    gap: 3rem;
    &-main {
      .student-info {
        background-color: ${colors.white};
        padding: 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 4px;

        .student-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;

          .img {
            position: relative;
            width: 80px;
            top: -0.5rem;
          }

          p {
            font-size: 1.5rem;
            padding-bottom: 0.3rem;
            padding-left: 1rem;
            color: ${colors.general70};
            &.name {
              font-size: 2rem;
              padding-bottom: 1rem;
            }
          }
        }
      }

      .customer-courses {
        margin-top: 3rem;
        background-color: #fff;
        border-radius: 4px;

        & > p {
          font-size: 1.8rem;
          padding: 1rem;
        }
      }
    }

    &-aside {
      .card {
        background-color: ${colors.white};
        padding: 2rem;

        border-radius: 4px;

        .top {
          display: flex;
          justify-content: space-between;
          p {
            font-size: 1.6rem;
          }

          button {
            color: ${colors.blue};
          }
        }

        .main {
          padding: 1rem 0;
          border-bottom: 1px solid ${colors.gray};

          &-item {
            padding: 1rem 0;
            .label {
              font-size: 1.5rem;
              color: ${colors.light};
              padding: 0.5rem 0;
            }

            .value {
              font-size: 1.3rem;
              color: ${colors.text};
            }
          }
        }

        .bottom {
          padding-top: 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          p {
            font-weight: bold;
            font-size: 1.4rem;
            color: ${colors.danger};
          }

          button {
            color: ${colors.danger};
          }
        }
      }

      .card2 {
        background-color: ${colors.white};
        padding: 2rem;
        margin-top: 2rem;

        .top {
          font-size: 1.6rem;
        }

        .input-div {
          padding: 2rem 0;

          label {
            font-size: 1.3rem;
            color: ${colors.text};
          }

          input {
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
`;
