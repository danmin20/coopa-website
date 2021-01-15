import React from "react";
import styled from "styled-components";
import defaultImg from "../assets/img/img_default.svg";
import { postCookieRead } from "../lib/api";

// const token = {
//   "x-access-token":
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJFbWFpbCI6IndqZGRuMDcyOEBuYXZlci5jb20iLCJpYXQiOjE2MDkzMzI1ODB9.T_GvqbwUHtBfjqgZj_Uki2R4woTN1djhf71lAabnOm4",
// };

const token = {
  "x-access-token": localStorage.getItem("userToken"),
};

export default ({ cookies }) => {
  const handleCookieClick = async () => {
    window.open(cookies.link);
    // 읽은 쿠키 표시
    await postCookieRead(token, cookies.id);
  };

  return (
    <Container onClick={handleCookieClick}>
      <Content thumbnail={cookies.thumbnail}>
        <div className="thumbnail" />
        <div className="title">{cookies.title}</div>
        <div className="content">{cookies.content}</div>
        <div className="profile">
          <img className="profile__favicon" src={cookies.favicon} />
          <div className="profile__author">{cookies.provider}</div>
        </div>
      </Content>
    </Container>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
  .thumbnail {
    width: 100%;
    height: 0;
    padding-bottom: ${(props) =>
      !props.thumbnail
        ? "calc((160 / 360) * 100%)"
        : "calc((220 / 360) * 100%)"};
    background: url(${(props) =>
        !props.thumbnail ? defaultImg : props.thumbnail})
      center center / cover no-repeat;
    border-radius: 1.2rem;
  }
  .title {
    color: ${({ theme }) => theme.colors.black_1};
    font-size: 2.4rem;
    font-weight: 500;
    margin-top: 2.8rem;
    margin-left: 1rem;
    margin-bottom: 1.8rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    word-wrap: normal;
    word-break: break-all;
  }
  .content {
    font-size: 1.7rem;
    margin-left: 1rem;
    margin-bottom: 2.3rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${(props) => (!props.thumbnail ? 3 : 2)};
    overflow: hidden;
    word-wrap: normal;
    word-break: break-all;
    color: ${({ theme }) => theme.colors.gray_5};
  }
  .profile {
    display: flex;
    align-items: center;
    margin-bottom: 2.4rem;
    margin-left: 1rem;
    &__author {
      margin-left: 1rem;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.gray_5};
    }
    &__favicon {
      width: 4.2rem;
      height: 4.2rem;
      border-radius: 0.8rem;
      object-fit: cover;
    }
  }
`;

const Container = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 0;
  padding-top: calc(477 / 360 * 100%);
  :hover {
    .title {
      text-decoration: underline;
    }
  }
`;
