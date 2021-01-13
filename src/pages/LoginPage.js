/* global chrome */

import React from "react";
import styled from "styled-components";
import loginLogo from "../assets/img/login_img_logo.svg";
import google_logo from "../assets/img/google_logo.svg";
import img_up from "../assets/img/login_img_meerkat.svg";
import img_under from "../assets/img/login_img_parkinglot.svg";
import { GoogleLogin } from "react-google-login";
import loginAPI from "../lib/loginApi";

const clientId =
  "428359515091-knafnj35m26iqbta2ddnmkgj5vjoc5bt.apps.googleusercontent.com";
// const token = {
//   'x-access-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsInVzZXJFbWFpbCI6InJ1cnVAZW1haWwuY29tIiwiaWF0IjoxNjA5MzQ5MDc2fQ.oG0IUwH9W07XOLVEABDVwSPHpFqjjy8tu9QIixLMqpc"
// }
const ExtensionId = 'lbgdcjefhogocimkajjkcibodjcnlghj';
const url = "https://www.cookieparking.com";

const LoginPage = () => {
  const handleSuccess = async (response) => {
    console.log(response);
    let token = {
      "x-access-token": response.accessToken,
    };
    let data = {
      name: response.profileObj.name,
      email: response.profileObj.email,
      googleId: response.profileObj.googleId,
      profileImage: response.profileObj.imageUrl,
    };
    // console.log(data);
    // console.log(token);
    const Response = loginAPI.postLogin(token, data);
    Response.then((res) => {
      console.log(res);
      localStorage.setItem("userToken", res.data.jwt);
      localStorage.setItem("isLogin", true);
      console.log(JSON.parse(localStorage.getItem("isLogin")));
      chrome.runtime.sendMessage(
        ExtensionId,
        { isLogin: true,
          userToken: res.data.jwt
        },
        function (response) {
          if (!response.success) console.log("fail");
        }
      );
      // window.postMessage("hey");
      // window.open('chrome-extension://lbgdcjefhogocimkajjkcibodjcnlghj/newtab.html', '_self');
    });
    // localStorage.setItem('userToken', Response.data.jwt);
    // localStorage.setItem('isLogin', true);
  };

  const handleFailure = (error) => {
    console.log(error);
  };

  return (
    <Wrap>
      <Container>
        <div className="login">
          <div className="login__logo"></div>
          <div className="login__content">
            매일 성장하는 나를 위한
            <br />
            가장 간편한 콘텐츠 파킹랏
          </div>
          <GoogleLogin
            clientId={clientId}
            responseType={"id_token"}
            render={(renderProps) => (
              <LoginBtn onClick={renderProps.onClick}>
                <LoginLogo src={google_logo} />
                <LoginText>Google 계정으로 로그인</LoginText>
              </LoginBtn>
            )}
            onSuccess={handleSuccess}
            onFailure={handleFailure}
          />
          <div className="login__policy">
            로그인은 개인 정보 보호 정책 및 서비스 약관에 동의하는 것을
            의미하며,
            <br />
            서비스 이용을 위해 이메일과 이름, 프로필 이미지를 수집합니다.
          </div>
        </div>
      </Container>
      <ImgWrap>
        <ImgUp src={img_up} />
        <ImgUnder src={img_under} />
      </ImgWrap>
    </Wrap>
  );
};

export default LoginPage;

const Wrap = styled.div`
  position: absolute;
  width: 100%;
  min-width: 90rem;
  height: 100%;
  min-height: 93.5rem;
  /* overflow: hidden; */
`;

const Container = styled.div`
  /* width: 100%; */
  position: absolute;
  z-index: 2;
  top: 20%;
  left: 10%;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 0.2rem 2rem 2rem rgba(255, 255, 255, 0.9);
  .login {
    /* margin-top: 20.2rem;
    margin-left: 19.2rem; */
    display: flex;
    flex-direction: column;
    &__logo {
      background: url(${loginLogo}) center center / cover no-repeat;
      width: 33rem;
      height: 4.8rem;
    }
    &__content {
      width: 70rem;
      margin-top: 2.5rem;
      font-weight: 500;
      font-size: 6.4rem;
      line-height: 10rem;
    }
    &__policy {
      color: ${({ theme }) => theme.colors.gray_5};
      font-size: 1.8rem;
      line-height: 2.7rem;
      margin-top: 29.5rem;
      margin-bottom: 5rem;
    }
  }
`;

const LoginBtn = styled.button`
  cursor: pointer;
  margin-top: 4rem;
  width: 34.2rem;
  height: 7.6rem;
  background: white;
  border: 2px solid ${({ theme }) => theme.colors.gray_5};
  border-radius: 1.2rem;
  outline: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const LoginLogo = styled.img`
  width: 3.5rem;
  height: 3.5rem;
`;

const LoginText = styled.div`
  color: #222222;
  font-size: 2.3rem;
  font-weight: 500;
`;

const ImgWrap = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ImgUp = styled.img`
  position: absolute;
  width: 26.2rem;
  height: 29.4rem;
  /* margin-top: 16.5rem; */
  top: 10%;
  right: -4.119rem;
  transform: rotate(8.39deg);
  /* margin-left: 29.909rem; */
  /* background-image: url(${img_up}); */
  /* transform: rotate(8.39deg); */
  /* object-fit: contain; */
`;

const ImgUnder = styled.img`
  position: absolute;
  width: 95.9rem;
  height: 47.1rem;
  /* margin-top: 60.09rem; */
  bottom: 0%;
  right: 0%;
  /* background-image: url(${img_under}); */
`;
