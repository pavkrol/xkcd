import React from "react";
import styled from "styled-components";

const MenuItem = ({ title, target, navigation }) => {
  return (
    <MenuItemWrapper onPress={() => navigation.navigate(target)}>
      <Content>{title}</Content>
    </MenuItemWrapper>
  );
};

export default MenuItem;

const Content = styled.Text`
  font-family: "bangers";
  font-size: 30px;
  text-shadow: 2px 2px 0px rgba(40, 40, 40, 0.37);
  letter-spacing: 2px;
`;

const MenuItemWrapper = styled.TouchableOpacity`
  height: 80px;
  width: 50%;
  justify-content: center;
  align-items: center;
`;
