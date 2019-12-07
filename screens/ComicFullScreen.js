import React from "react";
import styled from "styled-components";
import { Dimensions } from "react-native";
import Description from "../components/Description";

const ComicFullScreen = ({ navigation }) => {
  const screenHeight = Math.round(Dimensions.get("window").height);
  const imageSrc = navigation.getParam("comic", {}).img;
  const content = navigation.getParam("comic", {}).alt;
  return (
    <ComicFullScreenWrapper>
      <Description content={content} />
      <ComicImage
        source={{ uri: imageSrc }}
        resizeMode="contain"
        screenHeight={screenHeight}
      />
    </ComicFullScreenWrapper>
  );
};

export default ComicFullScreen;

const ComicFullScreenWrapper = styled.ScrollView`
  flex: 1;
  background-color: #e9ddcb;
`;

const ComicImage = styled.Image`
  width: 100%;
  height: ${props => props.screenHeight - 360};
`;
