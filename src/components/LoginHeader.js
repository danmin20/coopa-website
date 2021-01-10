import React from "react";
import styled from "styled-components";

const LoginHeader = () => {
  const isLoggined = true;

  return (
    <Container>
      <div style={{ flex: "0.3" }} />
      <div style={{ flex: "0.3" }} />
      <div style={{ flex: "0.3", alignItems: "center" }}>
        {isLoggined && <LoginBtn>로그인하기</LoginBtn>}
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-content: space-around;
  width: 100%;
  height: 5vh;
  flex: 1;
`;

const LoginBtn = styled.div`
  background-color: orange;
  flex: 0.3;
  padding: 0;
`;

export default LoginHeader;
