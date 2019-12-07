import React from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";

const MenuList = ({ navigation }) => {
  data = [
    {
      title: "what's xkcd?",
      target: "About",
      type: "internal"
    },
    {
      title: "recent comics",
      target: "ComicList",
      type: "internal"
    },
    {
      title: "author's website",
      target: "https://xkcd.com",
      type: "external"
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
          type={item.type}
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
