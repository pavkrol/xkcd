import React from "react";
import styled from "styled-components";

const ComicFullScreen = ({ imageSrc }) => {
  return (
    <ComicFullScreenWrapper>
      <ComicImage source={{ uri: imageSrc }} resizeMode="contain" />
    </ComicFullScreenWrapper>
  );
};

export default ComicFullScreen;

const ComicFullScreenWrapper = styled.View`
  flex: 1;
`;

const ComicImage = styled.Image`
  width: 100%;
  min-height: 600;
`;
