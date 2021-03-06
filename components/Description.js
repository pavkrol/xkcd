import React from "react";
import styled from "styled-components";

const Description = ({ content }) => {
  return (
    <DescriptionWrapper>
      <Content>{content}</Content>
    </DescriptionWrapper>
  );
};

export default Description;

const DescriptionWrapper = styled.View`
  margin: 30px;
  border-width: 2px;
  border-color: #000;
  justify-content: center;
  align-items: center;
  min-height: 100px;
`;

const Content = styled.Text`
  padding: 15px;
  text-align: center;
  font-family: "bangers";
  font-size: 22px;
  letter-spacing: 2px;
  line-height: 25px;
`;
