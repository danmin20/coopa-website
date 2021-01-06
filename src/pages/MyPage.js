import React from "react";
import styled from 'styled-components';
import editIcon from '../assets/img/editIcon.svg';
import cookieIcon from '../assets/img/cookieIcon.svg';
import Header from '../components/Header';

const MyPage = () => {
  return (
      <MainDiv>
          <UserInfo>
              <img className='user-img' alt=""/>
              <div className='user-intro'>
                  <div className='user-intro__name'>쿠키파킹 닉네임</div>
                  <div className='user-intro__info'>이 곳에는 사용자의 자기 소개를 입력하는 곳입니다. 만약 사용자가 입력 전이라면 “자기 소개를 입력해주세요. (70자 이내)”가 들어갈 예정입니다.</div>
                  <div className='user-intro__edit'>
                      <ProfileEditIcon src={editIcon}/>프로필 편집
                  </div>
              </div>
          </UserInfo>
          <CookieInfo>
              <img className='cookie-icon' src={cookieIcon}/>
              <div className='cookie-info'>
                  <span className='cookie-info__num'>1328</span>개의 쿠키를 파킹했고&nbsp;
                  <span className='cookie-info__visit'>178</span>번 파킹랏에 방문했어요!
              </div>
          </CookieInfo>
          <AccountInfo>
              <div className='account-header'>계정정보</div>
              <div className='account'>
                  <div className='account-div'>이메일</div>
                  <div className='account-info'>
                      <div className='account-info__email'>dlwjddls963@gmail.com</div>
                      <div className='account-info__state'>현재 구글 소셜로그인 중인 계정입니다. </div>
                  </div>
              </div>
          </AccountInfo>
          <ServiceInfo>
              <div className='service-header'>서비스 정보</div>
              <div className='service'>
                  <div className='service-sort'>서비스 피드백</div>
                  <div className='service-sort'>이용약관</div>
                  <div className='service-sort'>개인정보보호 정책</div>
                  <div className='service-sort'>제휴 및 광고 문의</div>
                  <div className='service-sort'>회원 탈퇴</div>
              </div>
          </ServiceInfo>
      </MainDiv>
  );
};

const ServiceInfo=styled.div`
    display: flex;
    flex-direction: column;
    width: 94.4rem;
    margin-top: 6.4rem;
    .service-header{
        width: 100%;
        height: 4.3rem;
        margin-bottom: 2.0rem;

        font-family: Spoqa Han Sans Neo;
        font-style: normal;
        font-weight: 500;
        font-size: 3.6rem;
        line-height: 4.3rem;

        color: #555555;
    }
    .service{
        display: grid;
        grid-template-columns: 32.2rem 32.2rem;
        grid-template-rows: 7rem 7rem 7rem;
        padding-top: 2.8rem;
        padding-bottom: 2.8rem;

        border-top: solid 0.1rem #C4C4C4;
        &-sort{
            min-width: 48.8rem;
            font-family: Spoqa Han Sans Neo;
            font-style: normal;
            font-weight: normal;
            font-size: 2.6rem;
            line-height: 3.1rem;

            color: #999999;
        }
    }

`;
const AccountInfo=styled.div`
    display: flex;
    flex-direction: column;
    width: 94.4rem;
    .account-header{
        width: 100%;
        height: 4.3rem;
        margin-bottom: 2rem;

        font-family: Spoqa Han Sans Neo;
        font-style: normal;
        font-weight: 500;
        font-size: 3.6rem;
        line-height: 4.3rem;

        color: #555555;
    }
    .account{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-top: 2.8rem;
        padding-bottom: 2.8rem;

        border-top: solid 0.1rem #C4C4C4;
        &-div{
            font-family: Spoqa Han Sans Neo;
            font-style: normal;
            font-weight: normal;
            font-size: 2.6rem;
            line-height: 3.1rem;

            color: #999999;

        }
        &-info{
            display: flex;
            flex-direction: column;
            &__email{
                display: flex;
                justify-content:center;
                align-items: center;
                width: 61.8rem;
                height: 7.6rem;
                background: #F3F3F3;
                border-radius: 1rem;

                font-family: Spoqa Han Sans Neo;
                font-style: normal;
                font-weight: 500;
                font-size: 2.4rem;
                line-height: 2.9rem;

                color: #9A9A9A;
            }
            &__status{
                font-family: Spoqa Han Sans Neo;
                font-style: normal;
                font-weight: normal;
                font-size: 1.8rem;
                line-height: 2.2rem;

                color: #A8A8A8;

            }
        }
    }

`;
const MainDiv=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 13.2rem;
    margin-bottom: 13.2rem;
`;
const UserInfo=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 94.4rem;
    height: 23rem;
    .user-img{
        width: 23rem;
        height: 23rem;
        border-radius: 23rem;
        margin-right: 6.3rem;

        background: #F3F3F3;
    }
    .user-intro{
        display: flex;
        flex-direction: column;
        width: 71.4rem;
        &__name{
            font-family: Spoqa Han Sans Neo;
            font-style: normal;
            font-weight: bold;
            font-size: 4rem;
            line-height: 4.8rem;
            margin-bottom: 1.8rem;

            color: #222222;
        }
        &__info{
            font-family: Spoqa Han Sans Neo;
            font-style: normal;
            font-weight: normal;
            font-size: 2rem;
            line-height: 3.2rem;
            color: #979797;
        }
        &__edit{
            display:flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 22.5rem;
            height: 5.8rem;
            margin-top: 2.7rem;

            border: 0.2rem solid #FF7134;
            box-sizing: border-box;
            filter: drop-shadow(0px 0px 1.2rem rgba(0, 0, 0, 0.13));
            border-radius: 1rem;

            font-family: Spoqa Han Sans Neo;
            font-style: normal;
            font-weight: normal;
            font-size: 2.3rem;
            line-height: 2.8rem;

            color: #FF7134;
        }
    }

`;
const ProfileEditIcon=styled.img`
    margin-right: 1rem;
`;

const CookieInfo=styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 94.4rem;
    height: 14.1rem;
    margin: 6.6rem;
    background: #F3F3F3;
    border-radius: 1.2rem;
    .cookie-icon{
        margin-right: 2.1rem;
    }
    .cookie-info{
        font-family: Spoqa Han Sans Neo;
        font-style: normal;
        font-weight: 500;
        font-size: 2.3rem;
        line-height: 2.8rem;

        color: #222222;
        &__num,&__visit{
            font-family: Spoqa Han Sans Neo;
            font-style: normal;
            font-weight: bold;
            font-size: 3.2rem;
            line-height: 3.8rem;
            margin-right: 0.6rem;

            color: #FF7134;

        }
    }
`;

export default MyPage;