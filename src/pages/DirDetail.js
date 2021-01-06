import React from "react";
import styled from "styled-components";
import updateIconBk from "../assets/img/update_dir_icon_bk.svg";
import shareIcon from "../assets/img/share_icon.svg";
import cookieIcon from "../assets/img/cookie_icon.svg";

const DirDetaill = () => {
  return (
    <Container>
      <div className="header">
        <div className="header__title">캐릭터/일러스트레이션</div>
        <div className="header__update-icon"></div>
        <div className="empty"></div>
        <div className="header__share">
          <img alt="" className="icon" src={shareIcon} />
          <div className="desc">디렉토리 공유</div>
        </div>
      </div>
      <div className="info">
        <img alt="" className="info__icon" src={cookieIcon} />
        <div className="info__cookie-num">37개</div>
      </div>
      <div className="mid">
        <div className="mid__profile"></div>
        <div className="mid__name">Jeongin Lee</div>
        <div className="empty"></div>
        <div className="toggle">
          <div className="toggle__help">?</div>
          <div className="toggle__title">안 읽은 쿠키 모아보기</div>
          {/* 여기 스위치가 와야 해 */}
        </div>
      </div>
    </Container>
  );
};

export default DirDetaill;

const Container = styled.div`
  margin-top: 10rem;
  .header {
    display: flex;
    align-items: center;
    &__title {
      font-weight: bold;
      font-size: 3.8rem;
      color: ${({ theme }) => theme.colors.black_2};
    }
    &__update-icon {
      cursor: pointer;
      margin-left: 1.6rem;
      width: 3rem;
      height: 3rem;
      background: url(${updateIconBk}) center center / cover no-repeat;
    }
    &__share {
      border: 2px solid #ff7034;
      border-radius: 0.8rem;
      width: 21rem;
      height: 5.6rem;
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.orange};
      display: flex;
      justify-content: center;
      align-items: center;
      .desc {
        margin-left: 1.1rem;
        font-size: 2rem;
        font-weight: 500;
      }
    }
  }
  .info {
    display: flex;
    align-items: center;
    &__cookie-num {
      margin-left: 1.4rem;
      font-size: 2.6rem;
      font-weight: 500;
    }
  }

  .mid {
    margin-top: 6.4rem;
    display: flex;
    &__profile {
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 3.2rem;
      background-color: ${({ theme }) => theme.colors.lightGray};
      /* background: profile url here */
    }
    &__name {
      font-size: 2.2.rem;
      font-weight: 500;
    }
  }

  .toggle {
    display: flex;
    align-items: center;
    &__help {
      cursor: pointer;
      width: 2.8rem;
      height: 2.8rem;
      background: ${({ theme }) => theme.colors.mediumGray};
      border-radius: 2.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${({ theme }) => theme.colors.white};
      font-size: 1.6rem;
      font-weight: 500;
    }
    &__title {
      font-size: 2rem;
      color: #404040;
      margin-left: 0.8rem;
    }
  }
  .empty {
    flex: 1;
  }
`;
