import React from "react";
import styled from "styled-components";
import img from "../assets/icons/girlphoto.svg";
import iconMore from "../assets/icons/Iconmore.svg";
const UserContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 28px;
  background-color: #fff;
  padding: 1.5rem;
  margin-right: 5rem;
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 25rem;
    width: 32rem;
    margin-right: 0;
  }
`;
const UserPrimaryInfo = styled.div`
  display: flex;
  align-items: center;
  & > div {
    padding: 0 1rem;
  }

  @media (max-width: 1024px) {
  }
`;

const UserImage = styled.img`
  @media (max-width: 1024px) {
  }
`;

const UserName = styled.p`
  color: #000;
  font-size: 1.5rem;
  font-weight: lighter;

  @media (max-width: 1024px) {
  }
`;

const UserEmail = styled.p`
  color: #ccc;
  font-size: 1.3rem;
  font-weight: lighter;
  padding-top: 0.5rem;
  @media (max-width: 1024px) {
  }
`;

const UserSecondaryInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    margin: 0 3rem 0 3rem;
  }
  @media (max-width: 1024px) {
    width: 100%;
    padding: 2rem 0;

    div {
      margin: 0;
    }
  }
`;

const UserInfoValue = styled.p`
  color: #000;
  font-size: 1.5rem;
  font-weight: lighter;
  @media (max-width: 1024px) {
  }
`;

const UserInfoLabel = styled.p`
  color: #ccc;
  font-size: 1.3rem;
  padding: 0.5rem 0;
  font-weight: lighter;
  @media (max-width: 1024px) {
  }
`;

const UserLastInfo = styled.div`
  margin-right: 15rem;
  @media (max-width: 1024px) {
    margin-right: 0;
  }
`;

const UserInfoAction = styled.div`
  position: absolute;
  right: 3rem;
  top: 2rem;
  cursor: pointer;

  @media (max-width: 1024px) {
    right: 1.5rem;
    top: 2.5rem;
    img {
      width: 3rem;
    }
  }
`;
export default function User() {
  return (
    <UserContainer>
      <UserPrimaryInfo>
        <UserImage src={img} alt="user" />
        <div>
          <UserName>Rahan Bouess</UserName>
          <UserEmail>rahanbouess@outlook.com</UserEmail>
        </div>
      </UserPrimaryInfo>
      <UserSecondaryInfo>
        <div>
          <UserInfoLabel>Gender</UserInfoLabel>
          <UserInfoValue>Male</UserInfoValue>
        </div>
        <div>
          <UserInfoLabel>Birthday</UserInfoLabel>
          <UserInfoValue>May 01, 1999</UserInfoValue>
        </div>
        <div>
          <UserInfoLabel>Age</UserInfoLabel>
          <UserInfoValue>22</UserInfoValue>
        </div>
      </UserSecondaryInfo>
      <UserLastInfo>
        <UserInfoLabel>Major</UserInfoLabel>
        <UserInfoValue>Coomputer Science</UserInfoValue>
      </UserLastInfo>
      <UserInfoAction>
        <img src={iconMore} alt="icon" />
      </UserInfoAction>
    </UserContainer>
  );
}
