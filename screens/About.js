import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

const About = () => {
  return (
    <AboutWrapper>
      <Header content="what's xkcd" />
      <Paragraph>
        Xkcd is a website created by Randall Munroe, which posts funny comics
        every Monday, Wednesday and Friday. The author also wrote several books,
        like "What if" and "Things Explainer".
      </Paragraph>
      <Paragraph>
        This application provides you the list of last 8 comics directly from
        xkcd. If you want to get to know more about the author or browse some
        other comics, check out his website - xkcd.com.
      </Paragraph>
      <Paragraph>I'm sure you gonna like it!</Paragraph>
    </AboutWrapper>
  );
};

export default About;

const AboutWrapper = styled.View`
  flex: 1;
  background-color: #e9ddcb;
`;

const Paragraph = styled.Text`
  font-family: "lato";
  padding: 30px 30px 15px 30px;
  font-size: 22px;
  line-height: 30px;
`;
