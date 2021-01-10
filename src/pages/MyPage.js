import React, { useState } from "react";
import styled from "styled-components";
import userProfile from "../assets/img/user_profile.svg";
import editIcon from "../assets/img/editIcon.svg";
import editIconWhite from "../assets/img/editIcon_white.svg";
import cookieIconOrange from "../assets/img/cookie_icon_orange.svg";
import googleLogo from "../assets/img/google_logo.svg";
import helpPopupImg from "../assets/img/mp_help_popup.svg";

export default () => {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouserLeave = () => {
    setIsHover(false);
  };
  return (
    <Container>
      <UserInfo>
        <img className="user-img" alt="" src={userProfile} />
        <div className="user-intro">
          <div className="user-intro__name">김쿠키</div>
          <div className="user-intro__info">
            이 곳에는 사용자의 자기 소개를 입력하는 곳입니다. 만약 사용자가 입력
            전이라면 “자기 소개를 입력해주세요. (70자 이내)”가 들어갈
            예정입니다.
          </div>
          <div className="user-intro__edit">
            <div className="icon"></div>
            <div style={{ marginLeft: "0.9rem" }}>프로필 편집</div>
          </div>
        </div>
      </UserInfo>
      <CookieInfo>
        <img alt="" className="cookie-icon" src={cookieIconOrange} />
        <div className="cookie-info">
          <span className="cookie-info__num">1328</span>개의 쿠키를
          파킹했고&nbsp;
          <span className="cookie-info__visit">178</span>번 읽었어요!
        </div>
      </CookieInfo>
      <AccountInfo>
        <div className="account-header">계정 설정</div>
        <div className="email">
          <div className="email__title">이메일</div>
          <div className="email__content">
            <div style={{ marginLeft: "2.7rem" }}>dlwjddls963@gmail.com</div>
            <div className="empty"></div>
            <img src={googleLogo} style={{ marginRight: "1.5rem" }} />
          </div>
        </div>
      </AccountInfo>
      <EnvSetInfo>
        <div className="env">
          환경 설정
          <PopupHelpImg src={helpPopupImg} isHover={isHover} />
        </div>
        <div className="env-newtab">
          <div className="env-newtab__title">새 탭에서 열기</div>
          <div
            className="env-newtab__help"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouserLeave}
          >
            ?
          </div>
        </div>
        <div className="desc">
          매일 새 탭을 열 때마다 쿠키파킹과 함께하세요!
        </div>
      </EnvSetInfo>
      <ServiceInfo>
        <div className="service-header">서비스 정보</div>
        <div className="service">
          <div className="service-sort">서비스 피드백</div>
          <div className="service-sort">이용약관</div>
          <div className="service-sort">개인정보보호 정책</div>
          <div className="service-sort">제휴 및 광고 문의</div>
          {/* <div className="service-sort">회원 탈퇴</div> */}
        </div>
        <div className="logout">
          <div className="logout__btn">로그아웃</div>
        </div>
      </ServiceInfo>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 13.2rem;
  margin-bottom: 13.2rem;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 94.4rem;
  height: 23rem;
  .user-img {
    width: 23rem;
    height: 23rem;
    border-radius: 23rem;
    margin-right: 6.3rem;

    background: #f3f3f3;
  }
  .user-intro {
    display: flex;
    flex-direction: column;
    width: 71.4rem;
    &__name {
      /* font-family: Spoqa Han Sans Neo; */
      font-style: normal;
      font-weight: bold;
      font-size: 4rem;
      line-height: 4.8rem;
      margin-bottom: 1.8rem;

      color: #222222;
    }
    &__info {
      /* font-family: Spoqa Han Sans Neo; */
      font-style: normal;
      font-weight: normal;
      font-size: 2rem;
      line-height: 3.2rem;
      color: #979797;
    }
    &__edit {
      cursor: pointer;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 22.5rem;
      height: 5.8rem;
      margin-top: 2.7rem;

      border: 0.2rem solid ${({ theme }) => theme.colors.cookieOrange};
      box-sizing: border-box;
      filter: drop-shadow(0px 0px 1.2rem rgba(0, 0, 0, 0.13));
      border-radius: 1rem;
      .icon {
        background: url(${editIcon}) center center / cover no-repeat;
        width: 2.2rem;
        height: 2.2rem;
      }
      :hover {
        transition: color 0.5s;
        transition: background 0.5s;
        .icon {
          background: url(${editIconWhite}) center center / cover no-repeat;
        }
        background: ${({ theme }) => theme.colors.cookieOrange};
        color: ${({ theme }) => theme.colors.white};
        border: none;
      }

      /* font-family: Spoqa Han Sans Neo; */
      font-style: normal;
      font-weight: normal;
      font-size: 2.3rem;
      line-height: 2.8rem;

      color: #ff7134;
    }
  }
`;

const CookieInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 94.4rem;
  height: 14.1rem;
  margin: 6.6rem;
  background: #f3f3f3;
  border-radius: 1.2rem;
  .cookie-icon {
    margin-right: 2.1rem;
  }
  .cookie-info {
    /* font-family: Spoqa Han Sans Neo; */
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 500;
    font-size: 2.3rem;
    line-height: 2.8rem;

    color: #222222;
    &__num,
    &__visit {
      /* font-family: Spoqa Han Sans Neo; */
      font-style: normal;
      font-weight: bold;
      font-size: 3.2rem;
      line-height: 3.8rem;
      margin-right: 0.6rem;

      color: ${({ theme }) => theme.colors.cookieOrange};
    }
  }
`;

const AccountInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 94.4rem;
  .account-header {
    width: 100%;
    height: 4.3rem;
    margin-bottom: 2rem;
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 4.3rem;
    color: ${({ theme }) => theme.colors.black_2};
    padding-bottom: 2rem;
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.grey_4};
  }
  .email {
    display: flex;
    align-items: center;
    &__title {
      font-size: 2.6rem;
      line-height: 3.1rem;
      font-weight: normal;
      letter-spacing: -0.02em;
    }
    &__content {
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.colors.grey_5};
      font-size: 2.4rem;
      font-weight: 500;
      line-height: 2.9rem;
      width: 61.8rem;
      height: 7.6rem;
      background: ${({ theme }) => theme.colors.grey_2};
      border-radius: 1rem;
      margin-left: 25.5rem;
    }
    .empty {
      flex: 1;
    }
  }
`;

const EnvSetInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 94.4rem;
  margin-top: 6rem;
  color: ${({ theme }) => theme.colors.black_2};
  .env {
    position: relative;
    font-size: 3.6rem;
    font-weight: 500;
    line-height: 4.3rem;
    padding-bottom: 2rem;
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.grey_4};
  }
  .env-newtab {
    margin-top: 5.1rem;
    display: flex;
    &__title {
      font-size: 2.6rem;
      font-weight: normal;
      line-height: 3.1rem;
      letter-spacing: -0.02em;
      color: ${({ theme }) => theme.colors.gray_6};
    }
    &__help {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.8rem;
      height: 2.8rem;
      border-radius: 2.8rem;
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.grey_4};
      margin-left: 1rem;
      font-size: 2rem;
      font-weight: 500;
    }
  }
  .desc {
    margin-top: 1.3rem;
    font-size: 2rem;
    line-height: 2.4rem;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.grey_5};
  }
`;

const PopupHelpImg = styled.img`
  display: ${(props) => (props.isHover ? "block" : "none")};
  position: absolute;
  top: -20%;
  left: 10.5%;
`;

const ServiceInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 94.4rem;
  margin-top: 6.4rem;
  .service-header {
    width: 100%;
    height: 4.3rem;
    margin-bottom: 2rem;
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 4.3rem;
    color: ${({ theme }) => theme.colors.black_2};
  }
  .service {
    display: grid;
    grid-template-columns: 1fr 1fr;

    border-top: solid 0.1rem ${({ theme }) => theme.colors.grey_4};
    &-sort {
      margin-top: 2.8rem;
      min-width: 48.8rem;
      font-family: Spoqa Han Sans Neo;
      font-style: normal;
      font-weight: normal;
      font-size: 2.6rem;
      line-height: 3.1rem;

      color: #999999;
    }
  }
  .logout {
    display: flex;
    justify-content: flex-end;
    margin-top: 13.4rem;
    &__btn {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2.4rem;
      font-weight: 500;
      line-height: 2.9rem;
      color: ${({ theme }) => theme.colors.grey_6};
      width: 22.5rem;
      height: 7.2rem;
      background: ${({ theme }) => theme.colors.grey_2};
      border-radius: 1.2rem;
    }
  }
`;
