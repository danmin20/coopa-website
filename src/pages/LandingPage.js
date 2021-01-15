import React from "react";
import styled from "styled-components";
import naviImgLogo from "../assets/img/navi_img_logo.svg";
import duribun1 from "../assets/img/Lp_1_duribun_1.svg";
import duribun2 from "../assets/img/Lp_1_duribun_2.svg";
import duribun3 from "../assets/img/Lp_1_duribun_3.svg";
import chromeIcon from "../assets/img/chrome_icon.svg";
import duribun21 from "../assets/img/Lp_2_duribun.svg";
import lp2Img1 from "../assets/img/Lp_2_img_web.svg";
import lp2Img2 from "../assets/img/Lp_2_img_parking.svg";
import lpgif from "../assets/img/cookieparking_landing_motion.gif";
import duribun31 from "../assets/img/Lp_3_duribun.svg";
import lp3Img1 from "../assets/img/Lp_3_img_1.svg";
import lp3Img2 from "../assets/img/Lp_3_img_2.svg";
import lp4Img1 from "../assets/img/Lp_4_web_wireframe.svg";
import lp4Img2 from "../assets/img/Lp_4_coopa.svg";
import duribun41 from "../assets/img/Lp_4_duribun.svg";
import lp5Img from "../assets/img/Lp_5_img.svg";
import cookieIcon from "../assets/img/cookie_icon_white.svg";
import Fade from "react-reveal/Fade";
// 박스영역 그려달라해서, 그 박스를 수평축에 걸리게 한 다음, 그 박스를 부모요소로 두고 이미지를 그걸 기준으로 absolute 위치 잡기

export default () => {
  return (
    <>
      <ContainerOne>
        <img className="navlogo" src={naviImgLogo} />
        <div className="content">
          <div className="content__h1">
            성장하는 사람들을 위한
            <br />
            가장 간편한 컨텐츠 파킹랏
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
        <Fade distance="5.5rem" right delay={1050} duration={700} enter>
          <img className="d3" src={duribun3} />
        </Fade>
        <Fade distance="3rem" bottom delay={500} duration={700}>
          <img className="d1" src={duribun1} />
          <img className="d2" src={duribun2} />
        </Fade>
      </ContainerOne>
      <ContainerTwo>
        <div className="content">
          <Fade distance="2rem" bottom delay={500} duration={700}>
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
          <Fade distance="1.5rem" bottom delay={500} duration={700}>
            <div className="content__h3">쿠키파킹은 이렇게 탄생했어요 ＞</div>
          </Fade>
        </div>
        <Fade delay={850}>
          <img className="img" src={lpgif} />
        </Fade>
      </ContainerTwo>
      <ContainerThree>
        <div className="img">
          <Fade distance="2.6rem" bottom delay={1100} duration={700}>
            <img className="img__i3" src={duribun31} />
          </Fade>
          <Fade delay={850} duration={700}>
            <img className="img__i2" src={lp3Img2} />
          </Fade>
          <Fade delay={1100} duration={700}>
            <img className="img__i1" src={lp3Img1} />
          </Fade>
        </div>
        <div className="content">
          <Fade distance="2.1rem" bottom delay={500} duration={700}>
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
        <div className="content">
          <Fade distance="2rem" bottom delay={500} duration={700}>
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
          <Fade distance="1.5rem" bottom delay={500} duration={700}>
            <div className="content__h3">쿠키파킹은 이렇게 탄생했어요 ＞</div>
          </Fade>
        </div>
        <div className="img">
          <Fade distance="3.8rem" right delay={1100} duration={700}>
            <img className="img__i2" src={lp4Img2}></img>
          </Fade>
          <Fade distance="3.8rem" right delay={850} duration={700}>
            <img className="img__i1" src={lp4Img1} />
          </Fade>
          <Fade distance="2.6rem" bottom delay={1100} duration={700}>
            <img className="img__i3" src={duribun41} />
          </Fade>
        </div>
      </ContainerFour>
      <ContainerFive>
        <div className="content">
          <Fade distance="2rem" bottom delay={500} duration={700}>
            <div className="content__h1">
              <div>새 탭에서</div>
              <div className="desc">
                <div>매일 쿠키파킹</div>
                <img
                  className="icon"
                  src={cookieIcon}
                  style={{ marginLeft: "1rem" }}
                />
              </div>
            </div>
          </Fade>
          <div className="content__h2">
            가볍게 쌓이는 성장의 만족감, 지금 시작하세요!
          </div>
          <div className="chrome">
            <img className="chrome__icon" src={chromeIcon} />
            <div className="chrome__desc">크롬 웹스토어 바로가기</div>
          </div>
          <Fade distance="2rem" bottom delay={500} duration={700}>
            <div className="content__h3">쿠키파킹은 이렇게 탄생했어요 ＞</div>
          </Fade>
        </div>
        <Fade distance="3rem" bottom delay={850} duration={700}>
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
    height: 45vh;
  }
  .content {
    padding-top: 7rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__h1 {
      text-align: center;
      font-size: 5.8rem;
      line-height: 8.8rem;
      font-weight: 700;
      .desc {
        display: flex;
        align-items: center;
      }
      .icon {
        padding-bottom: 1rem;
        width: 4rem;
        height: 4rem;
      }
    }
    &__h2 {
      margin-top: 4rem;
      font-size: 2.4rem;
      line-height: 3.8rem;
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
        padding-top: 0.4rem;
        margin-left: 1.6rem;
        color: ${({ theme }) => theme.colors.black_1};
        font-size: 2.5rem;
        line-height: 4rem;
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
      line-height: 4rem;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
const ContainerFour = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 113, 52, 0.06);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .img {
    position: relative;
    display: flex;
    justify-items: center;
    min-width: 90.5rem;
    min-height: 56.4rem;
    &__i1 {
      position: absolute;
      width: 76.4rem;
      height: auto;
      right: 5.5rem;
      bottom: 6.1rem;
      z-index: 1;
    }
    &__i2 {
      position: absolute;
      width: 90.5rem;
      height: auto;
      right: 12.4rem;
      bottom: 11.7rem;
      z-index: 2;
    }
    &__i3 {
      position: absolute;
      width: 16rem;
      height: auto;
      right: 8.6rem;
      bottom: 2.6rem;
      z-index: 3;
    }
  }
  .content {
    min-width: 42rem;
    min-height: 46.4rem;
    &__h1 {
      font-size: 5.4rem;
      line-height: 8.2rem;
      color: ${({ theme }) => theme.colors.black_2};
    }
    &__h2 {
      margin-top: 4rem;
      font-size: 2.4rem;
      line-height: 3.8rem;
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
      line-height: 4rem;
      color: ${({ theme }) => theme.colors.cookieOrange};
    }
  }
`;

const ContainerThree = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .img {
    position: relative;
    min-width: 87.9rem;
    min-height: 68.6rem;
    &__i1 {
      position: absolute;
      width: 32.1rem;
      height: auto;
      right: 11.7rem;
      bottom: 6.8rem;
      z-index: 3;
    }
    &__i2 {
      position: absolute;
      width: 36rem;
      height: auto;
      left: 26.1rem;
      bottom: 10.7rem;
      z-index: 2;
    }
    &__i3 {
      position: absolute;
      left: 7.4rem;
      bottom: 5.1rem;
      width: 24.4rem;
      height: auto;
      z-index: 3;
    }
  }
  .content {
    min-width: 35.7rem;
    min-height: 30rem;
    &__h1 {
      font-size: 5.4rem;
      line-height: 8.2rem;
      color: ${({ theme }) => theme.colors.black_2};
    }
    &__h2 {
      margin-top: 4rem;
      font-size: 2.4rem;
      line-height: 3.8rem;
      color: ${({ theme }) => theme.colors.gray_6};
    }
  }
`;

const ContainerTwo = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f6f6f6;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .content {
    display: flex;
    flex-direction: column;
    /* margin-left: 32.3rem; */
    min-width: 43rem;
    min-height: 41.6rem;
    &__h1 {
      font-size: 5.8rem;
      line-height: 8.8rem;
      color: ${({ theme }) => theme.colors.black_2};
    }
    &__h2 {
      margin-top: 3rem;
      font-size: 2.4rem;
      line-height: 4rem;
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
      line-height: 4rem;
      color: ${({ theme }) => theme.colors.cookieOrange};
    }
  }
  .img {
    width: 80rem;
    height: 80rem;
  }
`;

const ContainerOne = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .navlogo {
    position: absolute;
    top: 1.4rem;
    left: 2.8rem;
    width: 20.1rem;
  }
  .d3 {
    position: absolute;
    top: 15.3rem;
    right: 0;
    min-width: 26.1rem;
    height: auto;
  }
  .d1 {
    position: absolute;
    left: 0;
    bottom: 0;
    min-width: 67.8rem;
    height: auto;
  }
  .d2 {
    position: absolute;
    right: 0;
    bottom: 0;
    min-width: 70.4rem;
    height: auto;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__h1 {
      min-width: 70rem;
      min-height: 19.2rem;
      font-size: 6.5rem;
      line-height: 9.6rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.black_2};
      text-align: center;
    }
    &__h2 {
      margin-top: 4rem;
      font-size: 2.4rem;
      line-height: 4rem;
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
        padding-top: 0.4rem;
        margin-left: 1.6rem;
        color: ${({ theme }) => theme.colors.black_1};
        font-size: 2.5rem;
        line-height: 4rem;
        font-weight: 500;
      }
    }
  }
`;
