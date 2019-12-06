import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <Content>xkcd</Content>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #c3d0e7;
  width: 100%;
  height: 70px;
  margin-top: 20px;
`;

const Content = styled.Text`
  font-family: "bangers";
  font-size: 40px;
  letter-spacing: 2px;
`;
