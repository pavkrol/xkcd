import React from "react";
import styled from "styled-components";
import { Linking } from "expo";

const MenuItem = ({ title, target, navigation, type }) => {
  return (
    <MenuItemWrapper
      onPress={() =>
        type === "internal"
          ? navigation.navigate(target)
          : Linking.openURL(target)
      }
    >
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
  width: 80%;
  justify-content: center;
  align-items: center;
`;
