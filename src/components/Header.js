import React, { useState } from "react";
import styled from "styled-components";
import mainLogo from "../assets/img/navi_img_logo.svg";
import onboardingIcon from "../assets/img/icon_onboarding.svg";
import mypageIcon from "../assets/img/icon_mypage.svg";
import alarmLogo from "../assets/img/icon_alarm.svg";
import { withRouter } from "react-router-dom";

export default withRouter(({ history }) => {
  const [isHover, setIsHover] = useState(false);
  // const handleMouseEnter = () => {
  //   setIsHover(true);
  // };
  // const handleMouseLeave = () => {
  //   setIsHover(false);
  // };
  const handleClickMypage = () => {
    window.open("https://www.cookieparking.com/mypage", "_self");
  };
  const handleClickAlarm = () => {
    // setPrepareModalState(true);
  };
  return (
    <Container>
      <div className="main-logo" onClick={() => history.push("/")}>
        <img
          style={{ width: "20.2rem", height: "3.8rem" }}
          className="main-logo__img"
          src={mainLogo}
        />
      </div>
      <div className="icon">
        <img
          className="icon__onboarding"
          src={onboardingIcon}
          // onClick={() => setOnboardingState(true)}
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
        />
        <img
          className="icon__alarm"
          src={alarmLogo}
          onClick={handleClickAlarm}
        />
        <img
          className="icon__mypage"
          src={mypageIcon}
          onClick={handleClickMypage}
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
  .icon {
    position: relative;
    display: flex;
    align-items: center;
    &__onboarding {
      cursor: pointer;
      width: 3.2rem;
      height: 3.2rem;
      margin-right: 3rem;
    }
    &__alarm {
      cursor: pointer;
      width: 2.4rem;
      height: 3.2rem;
      margin-right: 3rem;
    }
    &__mypage {
      cursor: pointer;
      width: 3.2rem;
      height: 3.2rem;
      margin-right: 2.5rem;
    }
  }
`;
