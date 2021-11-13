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
        justify-content: space-evenly;
        border-radius: 4px;

        .student-top {
          display: flex;
          align-items: center;
          justify-content: center;

          .img {
            width: 80px;
          }

          .name {
            font-size: 2rem;
            padding-left: 1rem;
            color: ${colors.general70};
          }
        }

        .infos {
          display: flex;
          justify-content: space-around;
          border-left: 1px solid ${colors.gray};
          &-list {
            padding-left: 3rem;
            p {
              font-size: 1.4rem;
              padding: 0.8rem;
              color: ${colors.text};
            }
          }
        }
      }

      .student-courses {
        padding-top: 3rem;

        & > p {
          font-size: 2rem;
          padding: 2rem 0;
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
    }
  }
`;
