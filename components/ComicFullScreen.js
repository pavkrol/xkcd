import React from "react";
import styled from "styled-components";
import { Dimensions } from "react-native";

const ComicFullScreen = ({ navigation }) => {
  const screenHeight = Math.round(Dimensions.get("window").height);
  const imageSrc = navigation.getParam("comic", {}).img;
  return (
    <ComicFullScreenWrapper>
      <ComicImage
        source={{ uri: imageSrc }}
        resizeMode="contain"
        screenHeight={screenHeight}
      />
    </ComicFullScreenWrapper>
  );
};

export default ComicFullScreen;

const ComicFullScreenWrapper = styled.View`
  flex: 1;
  background-color: #e9ddcb;
`;

const ComicImage = styled.Image`
  width: 100%;
  height: ${props => props.screenHeight - 70};
`;
