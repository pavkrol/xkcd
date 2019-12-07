import React from "react";
import styled from "styled-components";

const Header = ({ content }) => {
  return (
    <HeaderWrapper>
      <Content>{content}</Content>
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
  position: relative;
  border-top-width: 2;
  border-top-color: #000;
  border-bottom-width: 2;
  border-bottom-color: #000;
`;

const Content = styled.Text`
  font-family: "bangers";
  font-size: 40px;
  letter-spacing: 2px;
  width: 100%;
  text-align: center;
  text-shadow: 3px 3px 0px rgba(40, 40, 40, 0.37);
`;
