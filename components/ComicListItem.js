import React from "react";
import styled from "styled-components";

const ComicListItem = ({ comic }) => {
  return (
    <ComicListItemWrapper>
      <AsideWrapper>
        <Date>{`${comic.day}/${comic.month}/${comic.year}`}</Date>
        <Title>{comic.title}</Title>
      </AsideWrapper>
      <Thumbnail source={{ uri: comic.img }} resizeMode="contain" />
    </ComicListItemWrapper>
  );
};

export default ComicListItem;

const ComicListItemWrapper = styled.View`
  margin-bottom: 25;
  height: 200;
  flex-wrap: wrap;
  border: 1px solid #000;
  padding: 10px;
`;

const AsideWrapper = styled.View`
  justify-content: center;
  height: 100%;
  width: 50%;
`;

const Title = styled.Text`
  font-family: "bangers";
  font-size: 22px;
  padding-right: 10px;
`;

const Date = styled.Text`
  font-family: "bangers";
  font-size: 22px;
  margin-bottom: 15px;
`;

const Thumbnail = styled.Image`
  width: 50%;
  height: 180px;
`;
