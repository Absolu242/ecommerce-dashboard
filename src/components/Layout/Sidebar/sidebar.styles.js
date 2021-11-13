import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const SidebarContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: left;
  height: 100%;
  max-width: 26.5rem;
  width: 100%;
  box-shadow: inset -1px 0px #d9e1ec;
  padding: 4rem 2rem 5rem 2rem;
  overflow-y: auto;
  scrollbar-width: thin;

  .label {
    font-size: 1.2rem;
    font-weight: 400;
    color: ${colors.light};
    padding: 2rem 1rem 1rem 1.5rem;
  }

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-track {
    background-color: #d9e1ec;
  }

  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  width: 100%;
  transition: all 0.3s;
`;

export const SidebarItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: 1.3rem 1.5rem;
  font-size: 1.4rem;
  color: ${colors.text};

  p {
    padding-left: 2rem;
    transition: all 0.3s;
  }

  &:hover,
  &.active {
    background-color: ${colors.text};
    border-radius: 4px;
    color: ${colors.white};
  }
`;
