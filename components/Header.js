import React from "react";
import styled from "styled-components";

const Header = ({ isComicChosen, goBack }) => {
  return (
    <HeaderWrapper>
      {isComicChosen && (
        <ArrowBack onPress={goBack}>
          <Arrow source={require("../assets/img/arrow_back.png")} />
        </ArrowBack>
      )}
      <Content>xkcd</Content>
    </HeaderWrapper>
  );
};

export default Header;

const ArrowBack = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: 0;
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
`;

const Arrow = styled.Image`
  width: 30px;
  height: 30px;
`;

const HeaderWrapper = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #c3d0e7;
  width: 100%;
  height: 70px;
  margin-top: 20px;
  position: relative;
`;

const Content = styled.Text`
  font-family: "bangers";
  font-size: 40px;
  letter-spacing: 2px;
`;
