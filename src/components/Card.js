import React from "react";
import styled from "styled-components";
import defaultImg from "../assets/img/img_default.svg";

export default () => {
  return (
    <Container thumbnail={defaultImg}>
      {/* thumbnail에 이미지 받아오기 cookies.image */}
      <Content>
        <div className="thumbnail"></div>
        <div className="title">title</div>
        <div className="content">content</div>
        <div className="profile">
          <img className="profile__favicon" />
          <div className="profile__author">provider</div>
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
