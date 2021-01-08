import React from "react";
import styled from "styled-components";
import mainLogo from "../assets/img/main_logo.svg";
import profileIcon from "../assets/img/profile_icon.svg";

export default () => {
  const handleRefresh = () => {
    // 라우팅 하여 메인페이지로 이동
    // history.push()
  };
  return (
    <Container>
      <div className="main-logo" onClick={handleRefresh}>
        <img className="main-logo__img" src={mainLogo} />
      </div>
      <div className="profile">
        <img className="profile__img" src={profileIcon} />
        {/* Todo : mypage link 걸기 */}
      </div>
    </Container>
  );
};

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
  }
  .profile {
    margin-right: 2.2rem;
  }
`;
