import React, { useEffect, useState } from "react";
import styled from "styled-components";
import updateIconBk from "../assets/img/update_dir_icon_bk.svg";
import shareIcon from "../assets/img/share_icon.svg";
import shareIconW from "../assets/img/share_icon_white.svg";
import cookieIcon from "../assets/img/cookie_icon.svg";
import Switch from "../components/Switch";
import {
  getDirCookies,
  getDirAll,
  postShareToken,
  getShareToken,
  getCookiesUnRead,
} from "../lib/api";
import { withRouter } from "react-router-dom";
import Loading from "../components/Loading";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  DirState,
  DeleteCookieClickState,
  ShareClickState,
  DirShareClickState,
} from "../states/atom";
import SharedCard from "../components/SharedCard";
import MyCard from "../components/MyCard";
import DirFixModal from "../components/DirFixModal";
import ToastMsg from "../components/ToastMsg";
import helpPopup from "../assets/img/cookies_img_help.svg";
import Header from "../components/Header";
import { CopyToClipboard } from "react-copy-to-clipboard";

// 로그인 구현되면 지우기
const token = {
  "x-access-token": localStorage.getItem("userToken"),
};

export default withRouter(({ history }) => {
  const [loading, setLoading] = useState(true);
  const [cookies, setCookies] = useState(null);
  const [dirState, setDirState] = useRecoilState(DirState);
  const [isOpen, setIsOpen] = useState(false);
  const [dirInfo, setDirInfo] = useState(null);
  const [isDelOpen, setIsDelOpen] = useState(false);
  const ShareClick = useRecoilValue(ShareClickState);
  const [isHover, setIsHover] = useState(false);
  const DeleteCookieClick = useRecoilValue(DeleteCookieClickState);
  const [ShareDirLink, setShareDirLink] = useState(null);
  const DirShareClick = useRecoilValue(DirShareClickState);
  const setDirShareClick = useSetRecoilState(DirShareClickState);
  const [userInfo, setUserInfo] = useState(null);
  const [isToggled, setIsToggled] = useState(false);

  const setMyData = async () => {
    const dirId = history.location.pathname.split("/")[2];
    // let cookieResult;
    const result = await getDirCookies(token, dirId);
    const dirResult = await getDirAll(token);

    setCookies(result.data.cookies);
    setDirInfo(result.data.directoryInfo);
    setDirState(dirResult.data);
  };

  const setShareData = async () => {
    const shareToken = history.location.pathname.split("/")[2];
    const result = await getShareToken(token, shareToken);
    setCookies(result.data.cookies);
    setUserInfo(result.data.userInfo);
    setDirInfo(result.data.directoryInfo);
  };

  useEffect(() => {
    (async () => {
      history.location.pathname.split("/")[1] === "directory" && setMyData();
      history.location.pathname.split("/")[1] === "share" && setShareData();
      setLoading(false);
    })();
  }, []);

  const handleClickUpdateIcon = (e) => {
    e.stopPropagation();
    setIsOpen(true);
    e.stopPropagation();
  };
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const shareDir = async (e) => {
    setDirShareClick(true);
    await postShareToken(token, { directoryId: dirInfo.id }).then((r) => {
      setShareDirLink(
        `https://www.cookieparking.com/share/${r.data.shareToken}`
      );
    });
  };

  const onCopy = async (e) => {
    await shareDir().then(() => {
      return { copied: true };
    });
  };

  const onToggleSwitch = (e) => {
    if (e.target.checked) setIsToggled(true);
    else setIsToggled(false);
  };

  return (
    <>
      <Header
        isMine={history.location.pathname.split("/")[1] === "directory"}
      />
      <Container>
        <div className="header">
          <div className="header__title">{dirInfo && dirInfo.name}</div>
          {history.location.pathname.split("/")[1] === "directory" && (
            <>
              <div
                className="header__update-icon"
                onClick={handleClickUpdateIcon}
              />
              <CopyToClipboard text={ShareDirLink} onCopy={onCopy}>
                <div className="header__share">
                  <div className="icon"></div>
                  <div className="desc">디렉토리 공유</div>
                </div>
              </CopyToClipboard>
            </>
          )}
        </div>
        <div className="info">
          <img alt="" className="info__icon" src={cookieIcon} />
          <div className="info__cookie-num">
            {cookies ? cookies.length : 0}개
          </div>
        </div>
        <div className="mid">
          {history.location.pathname.split("/")[1] === "share" && userInfo && (
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                alt=""
                src={userInfo.profileImage}
                className="mid__profile"
              ></img>
              <div className="mid__name">{userInfo.name}</div>
            </div>
          )}
          {history.location.pathname.split("/")[1] === "directory" && (
            <>
              <PopupHelp isHover={isHover} src={helpPopup} alt="help-popup" />
              <div className="toggle">
                <div
                  className="toggle__help"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  ?
                </div>
                <div className="toggle__title">안 읽은 쿠키 모아보기</div>
                <Switch onChange={onToggleSwitch} />
              </div>
            </>
          )}
        </div>
        {loading || !cookies ? (
          <Loading />
        ) : (
          <CardContainer>
            {cookies.map((cookie, index) =>
              history.location.pathname.split("/")[1] === "directory" ? (
                isToggled ? (
                  cookie.readCnt === 0 && (
                    <MyCard setData={setMyData} cookies={cookie} key={index} />
                  )
                ) : (
                  <MyCard setData={setMyData} cookies={cookie} key={index} />
                )
              ) : (
                <SharedCard cookies={cookie} key={index} />
              )
            )}
          </CardContainer>
        )}
      </Container>
      {isOpen && (
        <DirFixModal
          setData={setMyData}
          setIsOpen={setIsOpen}
          setIsDelOpen={setIsDelOpen}
          dir={dirInfo}
        />
      )}
      {ShareClick && <ToastMsg msg="링크가 복사되었어요!" />}
      {DeleteCookieClick && <ToastMsg msg="쿠키를 삭제했어요!" />}
      {DirShareClick && <ToastMsg msg="공유 링크가 생성되었어요!" />}
    </>
  );
});

const CardContainer = styled.div`
  max-width: 100vw;
  margin-top: 5.2rem;
  margin-bottom: 3.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(32rem, auto));
  grid-gap: 3.2rem;
`;

const PopupHelp = styled.img`
  display: ${(props) => (props.isHover ? "block" : "none")};
  position: absolute;
  width: 54.8rem;
  height: 11.2rem;
  top: -10rem;
  right: 34rem;
`;

const Container = styled.div`
  margin: 10rem 19.2rem 0;
  .header {
    display: flex;
    align-items: center;
    &__title {
      font-weight: bold;
      line-height: 3.6rem;
      font-size: 3.8rem;
      color: ${({ theme }) => theme.colors.black_2};
    }
    &__update-icon {
      cursor: pointer;
      margin-left: 1.6rem;
      margin-bottom: 0.75rem;
      width: 3rem;
      height: 3rem;
      background: url(${updateIconBk}) center center / cover no-repeat;
    }
    &__share {
      display: flex;
      margin-left: auto;
      cursor: pointer;
      border: 2px solid ${({ theme }) => theme.colors.cookieOrange};
      border-radius: 0.8rem;
      width: 21rem;
      height: 5.6rem;
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.cookieOrange};
      justify-content: center;
      align-items: center;
      .icon {
        width: 1.8rem;
        height: 2rem;
        background: url(${shareIcon}) center center / cover no-repeat;
      }
      .desc {
        margin-left: 1.1rem;
        margin-top: 0.3rem;
        font-size: 2rem;
        font-weight: 500;
        letter-spacing: -0.02em;
        line-height: 2.6rem;
      }
      :hover {
        transition: color 0.5s;
        transition: background 0.5s;
        .icon {
          background: url(${shareIconW}) center center / cover no-repeat;
        }
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.cookieOrange};
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
      color: ${({ theme }) => theme.colors.black_2};
    }
  }

  .mid {
    margin-top: 6.4rem;
    display: flex;
    align-items: center;
    &__profile {
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 3.2rem;
      background-color: #efefef; // google profile will here
      /* background: profile url here */
    }
    &__name {
      margin-left: 1.4rem;
      font-size: 2.2rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.black_2};
    }
  }

  .toggle {
    display: flex;
    align-items: center;
    margin-left: auto;
    &__help {
      font-family: "Poppins", sans-serif;
      cursor: pointer;
      width: 2.8rem;
      height: 2.8rem;
      background: ${({ theme }) => theme.colors.gray_4};
      border-radius: 2.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${({ theme }) => theme.colors.white};
      font-size: 1.6rem;
      font-weight: 500;
    }
    &__title {
      margin: 0 1.5rem 0 0.8rem;
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.gray_5};
    }
  }
`;
