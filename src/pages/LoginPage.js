import React from "react";
import styled from "styled-components";
import loginLogo from "../assets/img/login_img_logo.svg";

const LoginPage = () => {
  return (
    <Container>
      <div className="login">
        <div className="login__logo"></div>
        <div className="login__content">
          매일 성장하는 나를 위한
          <br />
          가장 간편한 콘텐츠 파킹랏
        </div>
        <div className="login__btn"></div>
        <div className="empty"></div>
        <div className="login__policy">
          로그인은 개인 정보 보호 정책 및 서비스 약관에 동의하는 것을 의미하며,
          <br />
          서비스 이용을 위해 이메일과 이름,프로필 이미지를 수집합니다.
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  .login {
    margin-top: 20.2rem;
    margin-left: 19.2rem;
    display: flex;
    flex-direction: column;
    &__logo {
      background: url(${loginLogo}) center center / cover no-repeat;
      width: 33rem;
      height: 4.8rem;
    }
    &__content {
      margin-top: 2.5rem;
      font-weight: 500;
      font-size: 6.4rem;
      line-height: 8rem;
    }
    &__btn {
      margin-top: 4rem;
      width: 34.2rem;
      height: 7.6rem;
      border: 2px solid ${({ theme }) => theme.colors.gray_5};
      border-radius: 1.2rem;
    }
    &__policy {
      margin-top: 29.5rem;
      color: ${({ theme }) => theme.colors.gray_5};
      font-size: 1.8rem;
      line-height: 2.7rem;
    }
  }
`;
