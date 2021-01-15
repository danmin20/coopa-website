import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useInput from '../hooks/useInput';
import GlobalStyles from '../GlobalStyles';
import loginAPI from "../lib/loginApi";
import { useRecoilState } from "recoil";
import { UserDataState, UserTokenState } from "../states/atom";

// localStorage userToken 으로 바꾸기
// const token = {
//   'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjksInVzZXJFbWFpbCI6Imh5dW5qaW41Njk3QGdtYWlsLmNvbSIsImlhdCI6MTYxMDU0NTc3Mn0.RK7vdHhPEVCOTBmzF6rK4hKC5PaUH-6nfe_7lVJbkcE'
// }


export default ({isProfileClicked, setIsProfileClicked}) => {
    const [isCancleHover, setIsCancleHover] = useState(false);
    const [isFixHover, setIsFixHover] = useState(false);
    const [userData, setUserData] = useRecoilState(UserDataState);
    const [userToken, setUserToken] = useRecoilState(UserTokenState);
    const nickInput = useInput(userData.name);
    const introInput = useInput(userData.introduction==null? '' : userData.introduction);

  const handleClick = () => {
    setIsProfileClicked(false);
  };

    const handleFixClick = async () => {
        const data ={
          'name': nickInput.value,
          'introduction': introInput.value
        }
        const token = {
          'x-access-token': userToken
        }
        const response = await loginAPI.putUsers(token, data);
        console.log(response);
        const newData = {
          ...userData,
          name : nickInput.value,
          introduction: introInput.value
        };
        setUserData(newData);
        setIsProfileClicked(false);
    };

  const handleCancleMouseMove = () => {
    setIsCancleHover(true);
  };

  const handleCancleMouseLeave = () => {
    setIsCancleHover(false);
  };

  const handleFixMouseMove = () => {
    setIsFixHover(true);
  };

  const handleFixMouseLeave = () => {
    setIsFixHover(false);
  };

  return (
    <>
      <GlobalStyles />
      <Wrap onClick={handleClick} />
      <ModalWrap>
        <Text>프로필 편집</Text>
        <DetailWrap>
          <SmallText color={"#333333"}>닉네임</SmallText>
          <SmallText color={"#999999"}>{nickInput.value.length}/20</SmallText>
        </DetailWrap>
        <InputBox
          value={nickInput.value}
          type="text"
          onChange={nickInput.onChange}
          height={"3.4rem"}
          maxLength={20}
        />
        <DetailWrap>
          <SmallText color={"#333333"}>한 줄 소개</SmallText>
          <SmallText color={"#999999"}>{introInput.value.length}/70</SmallText>
        </DetailWrap>
        <TextAreaBox
          value={introInput.value}
          type="text"
          onChange={introInput.onChange}
          height={"7.2rem"}
          maxLength={70}
        />
        <BtnWrap>
          <CancelBtn
            onClick={handleClick}
            onMouseLeave={handleCancleMouseLeave}
            onMouseMove={handleCancleMouseMove}
          >
            취소
          </CancelBtn>
          <ConfirmBtn
            onClick={handleFixClick}
            onMouseLeave={handleFixMouseLeave}
            onMouseMove={handleFixMouseMove}
          >
            확인
          </ConfirmBtn>
        </BtnWrap>
      </ModalWrap>
    </>
  );
};

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 200;
  top: 0%;
  left: 0%;
  background: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isClose ? "none" : "box")};
  flex-direction: column;
`;

const ModalWrap = styled.div`
  width: 57.4rem;
  height: 38.3rem;
  padding: 4.2rem 3.8rem;
  position: fixed;
  z-index: 300;
  background: #ffffff;
  border-radius: 1.6rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: ${(props) => (props.isClose ? "none" : "flex")};
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 2.8rem;
  font-weight: 500;
  line-height: 3.6rem;
  color: #333333;
  margin-bottom: 1.5rem;
`;

const DetailWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SmallText = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 3.6rem;
  color: ${(props) => props.color};
  margin-bottom: 0.6rem;
`;

const InputBox = styled.input`
  width: 52.5rem;
  height: ${(props) => props.height};
  padding: 0.8rem 2.3rem;
  border: 0.1rem solid #333333;
  border-radius: 1rem;
  font-size: 2rem;
  font-weight: 400;
  outline: none;
  margin-bottom: 2rem;
  color: #333333;
`;
const TextAreaBox = styled.textarea`
  width: 52.5rem;
  padding-top: 3rem;
  height: ${(props) => props.height};
  padding: 0.8rem 2.3rem;
  border: 0.1rem solid #333333;
  border-radius: 1rem;
  font-size: 2rem;
  font-weight: 400;
  outline: none;
  margin-bottom: 2rem;
  color: #333333;
`;

const BtnWrap = styled.div`
  width: 57.3rem;
  height: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const CancelBtn = styled.div`
  cursor: pointer;
  width: 9rem;
  height: 5.2rem;
  background: ${(props) => (props.isHover ? "#FF7134" : "#F3F3F4")};
  color: ${(props) => (props.isHover ? "white" : "#404040")};
  border-radius: 1rem;
  font-style: normal;
  font-weight: 400;
  font-size: 2.1rem;
  line-height: 2.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1.5rem;
`;

const ConfirmBtn = styled.div`
  cursor: pointer;
  width: 9rem;
  height: 5.2rem;
  background: ${({ theme }) => theme.colors.cookieOrange};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  font-weight: 400;
  font-size: 2.1rem;
  line-height: 2.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1.5rem;
`;
