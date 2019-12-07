import React from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";

const MenuList = ({ navigation }) => {
  data = [
    {
      title: "what's xkcd?",
      target: "About"
    },
    {
      title: "recent comics",
      target: "ComicList"
    },
    {
      title: "author's website?",
      target: "About"
    }
  ];

  return (
    <MenuListWrapper>
      {data.map((item, index) => (
        <MenuItem
          key={index}
          title={item.title}
          target={item.target}
          navigation={navigation}
        />
      ))}
    </MenuListWrapper>
  );
};

export default MenuList;

const MenuListWrapper = styled.View`
  height: 100%;
  align-items: center;
  background-color: #e9ddcb;
`;
