import styled from "styled-components";
import React, { useState, useEffect } from "react";
import useInput from "../hooks/useInput";
import { DirState } from "../states/atom";
import { useRecoilState } from "recoil";
import { updateDir } from "../lib/api";

// const token = {
//   "x-access-token":
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJFbWFpbCI6IndqZGRuMDcyOEBuYXZlci5jb20iLCJpYXQiOjE2MDkzMzI1ODB9.T_GvqbwUHtBfjqgZj_Uki2R4woTN1djhf71lAabnOm4",
// };

const token = {
  "x-access-token": localStorage.getItem("userToken"),
};

export default ({ setIsOpen, setIsDelOpen, dir, setData }) => {
  const [dirState, setDirState] = useRecoilState(DirState);
  const [isDelHover, setIsDelHover] = useState(false);
  const [isCancleHover, setIsCancleHover] = useState(false);
  const [isFixHover, setIsFixHover] = useState(false);
  const [isClose, setIsClose] = useState(false);
  const modalInput = useInput(dir.name);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsClose(true);
  };

  const handleDelClick = (e) => {
    // 디렉토리 삭제 모달 띄우기
    e.stopPropagation();
    setIsClose(true);
    setIsDelOpen(true);
  };

  const handleFixClick = async (e) => {
    e.stopPropagation();
    const body = {
      name: modalInput.value,
      description: "설명은 없어질 예정",
    };
    await updateDir(token, body, dir.id);
    const newDirList = dirState.map((directory) =>
      directory.id === dir.id
        ? {
            ...directory,
            name: modalInput.value,
          }
        : directory
    );
    setDirState(newDirList);
    setData();
    setIsClose(true);
  };

  const handleDelMouseMove = () => {
    setIsDelHover(true);
  };

  const handleDelMouseLeave = () => {
    setIsDelHover(false);
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

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    isClose && setIsOpen(false);
  }, [isClose]);

  return (
    <>
      <Wrap onClick={handleClick} isClose={isClose} />
      <ModalWrap isClose={isClose} onClick={handleModalClick}>
        <Text>디렉토리 수정하기</Text>
        <DetailWrap>
          <SmallText>디렉토리 이름</SmallText>
          <SmallText>{modalInput.value.length}/20</SmallText>
        </DetailWrap>
        <InputBox
          value={modalInput.value}
          type="text"
          maxLength={20}
          onChange={modalInput.onChange}
        />
        <BtnWrap>
          <Btn
            isHover={isDelHover}
            onClick={handleDelClick}
            onMouseLeave={handleDelMouseLeave}
            onMouseMove={handleDelMouseMove}
          >
            삭제
          </Btn>
          <Space width={"28.6rem"} />
          <Btn
            isHover={isCancleHover}
            onClick={handleClick}
            onMouseLeave={handleCancleMouseLeave}
            onMouseMove={handleCancleMouseMove}
          >
            취소
          </Btn>
          <Space width={"1.5rem"} />
          <Btn
            isHover={isFixHover}
            onClick={handleFixClick}
            onMouseLeave={handleFixMouseLeave}
            onMouseMove={handleFixMouseMove}
          >
            수정
          </Btn>
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
  box-sizing: border-box;
  width: 65rem;
  height: 31.5rem;
  padding: 4.2rem 3.8rem;
  position: fixed;
  z-index: 300;
  background: #ffffff;
  border-radius: 1.4rem;
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
  color: ${({ theme }) => theme.colors.black_1};
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
  color: ${({ theme }) => theme.colors.black_1};
  margin-bottom: 0.6rem;
`;

const InputBox = styled.input`
  box-sizing: border-box;
  width: 57.3rem;
  height: 5.2rem;
  padding: 0.8rem 2.3rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.black_1};
  border-radius: 1.2rem;
  font-size: 2rem;
  font-weight: 400;
  outline: none;
  margin-bottom: 3.4rem;
  color: ${({ theme }) => theme.colors.black_1};
`;

const BtnWrap = styled.div`
  width: 57.2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Btn = styled.div`
  cursor: pointer;
  width: 9.8rem;
  height: 5.2rem;
  background: ${(props) => (props.isHover ? "#FF7134" : "#F3F3F4")};
  color: ${(props) => (props.isHover ? "white" : "#404040")};
  border-radius: 1rem;
  font-style: normal;
  font-weight: 500;
  font-size: 2.1rem;
  line-height: 2.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Space = styled.div`
  width: ${(props) => props.width};
`;
