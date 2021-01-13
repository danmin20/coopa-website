import React from "react";
import styled from "styled-components";
import mainLogo from "../assets/img/navi_img_logo.svg";
import onboardingIcon from "../assets/img/icon_onboarding.svg";
import mypageIcon from "../assets/img/icon_mypage.svg";
import alarmLogo from "../assets/img/icon_alarm.svg";
import { withRouter } from "react-router-dom";

export default withRouter(({ history, isMine }) => {
  return (
    <Container>
      <div className="main-logo" onClick={() => history.push("/")}>
        <img
          style={{ width: "20.2rem", height: "3.8rem" }}
          className="main-logo__img"
          src={mainLogo}
        />
      </div>
      <div className="profile">
        <img className="profile__img" src={onboardingIcon} />
        <img className="profileimg" src={alarmLogo} />
        <img
          style={{ marginRight: "2rem" }}
          className="profileImg"
          src={mypageIcon}
          onClick={() =>
            window.open("https://www.cookieparking.com/mypage", "_self")
          }
        />
      </div>
    </Container>
  );
});

const Container = styled.div`
  width: 100%;
  height: 6.5rem;
  background-color: ${({ theme }) => theme.colors.white};
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

    img {
      margin-left: 1.6rem;
      width: 4.4rem;
      height: 4.4rem;
    }
  }
`;
