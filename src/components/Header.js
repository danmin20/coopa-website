import React from "react";
import styled from "styled-components";
import mainLogo from "../assets/img/main_logo.svg";
import profileIcon from "../assets/img/profile_icon.svg";
import { withRouter } from "react-router-dom";

export default withRouter(({ history }) => {
  return (
    <Container>
      <div className="main-logo" onClick={() => history.push("/")}>
        <img
          style={{ width: "20.2rem", height: "3.8rem" }}
          className="main-logo__img"
          src={mainLogo}
        />
      </div>
      <div
        className="profile"
        onClick={() =>
          window.open("https://www.cookieparking.com/mypage", "_self")
        }
      >
        <img
          style={{ width: "3.6rem", height: "3.6rem" }}
          className="profile__img"
          src={profileIcon}
        />
      </div>
    </Container>
  );
});

const Container = styled.div`
  width: 100%;
  height: 6.5rem;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  .main-logo {
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-left: 2.2rem;

    &__img {
      width: 20rem;
      height: 3.8rem;
    }
  }
  .profile {
    margin-right: 2.2rem;
    cursor: pointer;

    &__img {
      width: 3.8rem;
      height: 3.8rem;
    }
  }
`;
