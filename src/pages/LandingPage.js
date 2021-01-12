import React from "react";
import styled from "styled-components";
import naviImgLogo from "../assets/img/navi_img_logo.svg";
import duribun1 from "../assets/img/Lp_1_duribun_1.svg";
import duribun2 from "../assets/img/Lp_1_duribun_2.svg";
import duribun3 from "../assets/img/Lp_1_duribun_3.svg";
import chromeIcon from "../assets/img/chrome_icon.svg";
import duribun31 from "../assets/img/Lp_3_duribun.svg";
import lp3Img1 from "../assets/img/Lp_3_img_1.svg";
import lp3Img2 from "../assets/img/Lp_3_img_2.svg";
import lp4Img1 from "../assets/img/Lp_4_web_wireframe.svg";
import lp4Img2 from "../assets/img/Lp_4_coopa.svg";
import duribun41 from "../assets/img/Lp_4_duribun.svg";
import lp5Img from "../assets/img/Lp_5_img.svg";
import cookieIcon from "../assets/img/cookie_icon_white.svg";
import Fade from "react-reveal/Fade";

export default () => {
  return (
    <>
      <ContainerOne>
        <img
          className="navlogo"
          src={naviImgLogo}
          style={{ marginTop: "1.4rem", marginLeft: "2.8rem" }}
        />
        <Fade right delay={500} duration={1500} enter>
          <img className="d3" src={duribun3} />
        </Fade>
        <div className="content">
          <div className="content__h1">
            스쳐간 콘텐츠가
            <br />
            영감이 되는 곳
          </div>
          <div className="content__h2">
            그때 봤던 그 콘텐츠 어디있지?
            <br />
            나만의 콘텐츠들을 한 곳에 모아봐요
          </div>
          <div className="chrome">
            <img className="chrome__icon" src={chromeIcon} />
            <div className="chrome__desc">크롬 웹스토어 바로가기</div>
          </div>
        </div>
        <Fade bottom delay={300} duration={1500}>
          <img className="d1" src={duribun1} />
          <img className="d2" src={duribun2} />
        </Fade>
      </ContainerOne>
      <ContainerTwo>
        <div className="content">
          <Fade bottom delay={100} duration={1500}>
            <div className="content__h1">
              <span style={{ fontWeight: "400" }}>한 번의 클릭으로</span>
              <br />
              <span style={{ fontWeight: "700" }}>가볍게 파킹</span>
            </div>
          </Fade>
          <div className="content__h2">
            한번의 클릭으로 분산된
            <br />
            좋은 콘텐츠들을 한곳에 모아봐요
          </div>
          <Fade bottom delay={100} duration={1500}>
            <div className="content__h3">쿠키파킹은 이렇게 탄생했어요 ＞</div>
          </Fade>
        </div>
      </ContainerTwo>
      <ContainerThree>
        <Fade delay={100} duration={1500}>
          <img className="i1" src={lp3Img1} />
        </Fade>
        <Fade delay={200} duration={1500}>
          <img className="i2" src={lp3Img2} />
        </Fade>
        <Fade bottom delay={300} duration={1500}>
          <img className="i3" src={duribun31} />
        </Fade>
        <div className="content">
          <Fade bottom>
            <div className="content__h1">
              <span style={{ fontWeight: "400" }}>손쉬운 분류로</span>
              <br />
              <span style={{ fontWeight: "700" }}>차곡차곡 정리</span>
            </div>
          </Fade>
          <div className="content__h2">
            어렵고 귀찮은 정리,
            <br />
            디렉토리로 쉽게 분류해요
          </div>
        </div>
      </ContainerThree>
      <ContainerFour>
        <Fade delay={100} duration={1500}>
          <img className="i1" src={lp4Img1} />
        </Fade>
        <Fade delay={200} duration={1500}>
          <img className="i2" src={lp4Img2} />
        </Fade>
        <Fade bottom delay={300} duration={1500}>
          <img className="i3" src={duribun41} />
        </Fade>
        <div className="content">
          <Fade>
            <div className="content__h1">
              <span style={{ fontWeight: "400" }}>좋은 콘텐츠들은</span>
              <br />
              <span style={{ fontWeight: "700" }}>주변에 공유</span>
            </div>
          </Fade>
          <div className="content__h2">
            나만의 콘텐츠 파킹랏을
            <br />
            누구에게나 손쉽게 공유해요
          </div>
          <Fade>
            <div className="content__h3">쿠키파킹은 이렇게 탄생했어요 ＞</div>
          </Fade>
        </div>
      </ContainerFour>
      <ContainerFive>
        <div className="content">
          <Fade bottom delay={100} duration={1500}>
            <div className="content__h1">
              새 탭에서 <br />
              매일 쿠키파킹
              <img src={cookieIcon} style={{ marginLeft: "1rem" }} />
            </div>
          </Fade>
          <div className="content__h2">
            가볍게 쌓이는 성장의 만족감, 지금 시작하세요!
          </div>
          <div className="chrome">
            <img className="chrome__icon" src={chromeIcon} />
            <div className="chrome__desc">크롬 웹스토어 바로가기</div>
          </div>
          <Fade bottom delay={100} duration={1500}>
            <div className="content__h3">쿠키파킹은 이렇게 탄생했어요 ＞</div>
          </Fade>
        </div>
        <Fade bottom delay={200} duration={1500}>
          <img className="i1" src={lp5Img} />
        </Fade>
      </ContainerFive>
    </>
  );
};
const ContainerFive = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.cookieOrange};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .i1 {
    position: absolute;
    bottom: 0;
    width: 169.4rem;
    height: 72.7rem;
  }
  .content {
    padding-top: 14rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    &__h1 {
      font-size: 5.8rem;
      line-height: 7.2rem;
      font-weight: 700;
    }
    &__h2 {
      margin-top: 4rem;
      font-size: 2.4rem;
      line-height: 2.8rem;
    }
    .chrome {
      cursor: pointer;
      margin-top: 6rem;
      width: 39rem;
      height: 8rem;
      border-radius: 1.4rem;
      background: #f6f6f6;
      display: flex;
      justify-content: center;
      align-items: center;
      &__desc {
        margin-left: 1.6rem;
        color: ${({ theme }) => theme.colors.black_1};
        font-size: 2.5rem;
        line-height: 3rem;
        font-weight: 500;
      }
    }
    &__h3 {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1.6rem;
      width: 35.2rem;
      height: 5.5rem;
      font-size: 2.4rem;
      font-weight: 500;
      line-height: 3rem;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
const ContainerFour = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 113, 52, 0.06);
  position: relative;
  .i1 {
    position: absolute;
    right: 19.2rem;
    bottom: 19.8rem;
    z-index: 1;
    width: 76.4rem;
    height: 44.4rem;
  }
  .i2 {
    position: absolute;
    right: 29.2rem;
    bottom: 29.1rem;
    z-index: 2;
    width: 90.5rem;
    height: 56.4rem;
  }
  .i3 {
    position: absolute;
    right: 22.3rem;
    bottom: 16.3rem;
    z-index: 3;
    width: 16rem;
    height: 16rem;
  }
  .content {
    padding-top: 31.5rem;
    margin-left: 32.3rem;
    &__h1 {
      font-size: 5.4rem;
      line-height: 7.2rem;
      color: ${({ theme }) => theme.colors.black_2};
    }
    &__h2 {
      margin-top: 4rem;
      font-size: 2.4rem;
      line-height: 2.8rem;
      color: ${({ theme }) => theme.colors.gray_6};
    }
    &__h3 {
      cursor: pointer;
      display: flex;
      align-items: center;
      margin-top: 2.6rem;
      width: 35.2rem;
      height: 5.5rem;
      font-size: 2.4rem;
      font-weight: 500;
      line-height: 3rem;
      color: ${({ theme }) => theme.colors.cookieOrange};
    }
  }
`;

const ContainerThree = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  .i1 {
    position: absolute;
    z-index: 3;
    bottom: 20.5rem;
    left: 67rem;
    width: 32.1rem;
    height: 43.9rem;
  }
  .i2 {
    position: absolute;
    z-index: 2;
    bottom: 24.4rem;
    left: 49rem;
    width: 36rem;
    height: 51.2rem;
  }
  .i3 {
    position: absolute;
    z-index: 3;
    bottom: 18.8rem;
    left: 30.3rem;
    width: 24.4rem;
    height: 24.4rem;
  }
  .content {
    position: absolute;
    padding-top: 35rem;
    right: 32.3rem;
    &__h1 {
      font-size: 5.4rem;
      line-height: 7.2rem;
      color: ${({ theme }) => theme.colors.black_2};
    }
    &__h2 {
      margin-top: 4rem;
      font-size: 2.4rem;
      line-height: 2.8rem;
      color: ${({ theme }) => theme.colors.gray_6};
    }
  }
`;

const ContainerTwo = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f6f6f6;
  .content {
    display: flex;
    flex-direction: column;
    margin-left: 32.3rem;
    &__h1 {
      padding-top: 30.7rem;
      font-size: 5.8rem;
      line-height: 7.8rem;
      color: ${({ theme }) => theme.colors.black_2};
    }
    &__h2 {
      margin-top: 3rem;
      font-size: 2.4rem;
      line-height: 3rem;
      color: ${({ theme }) => theme.colors.gray_6};
    }
    &__h3 {
      cursor: pointer;
      display: flex;
      align-items: center;
      margin-top: 2.6rem;
      width: 35.2rem;
      height: 5.5rem;
      font-size: 2.4rem;
      font-weight: 500;
      line-height: 3rem;
      color: ${({ theme }) => theme.colors.cookieOrange};
    }
  }
`;

const ContainerOne = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  .d3 {
    position: absolute;
    margin-top: 15.3rem;
    right: 0rem;
    width: 26.1rem;
    height: 24.4rem;
  }
  .d1 {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 67.8rem;
    height: 33.9rem;
  }
  .d2 {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 70.4rem;
    height: 32.4rem;
  }
  .content {
    margin-top: 32.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__h1 {
      font-size: 6.5rem;
      line-height: 8.6rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.black_2};
      text-align: center;
    }
    &__h2 {
      margin-top: 4rem;
      font-size: 2.4rem;
      line-height: 3rem;
      color: ${({ theme }) => theme.colors.gray_6};
      text-align: center;
    }
    .chrome {
      cursor: pointer;
      margin-top: 6rem;
      width: 39rem;
      height: 8rem;
      border-radius: 1.4rem;
      background: #f6f6f6;
      display: flex;
      justify-content: center;
      align-items: center;
      &__desc {
        margin-left: 1.6rem;
        color: ${({ theme }) => theme.colors.black_1};
        font-size: 2.5rem;
        line-height: 3rem;
        font-weight: 500;
      }
    }
  }
`;
