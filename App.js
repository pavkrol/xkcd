import React, { Component } from "react";
import styled from "styled-components";
import { ActivityIndicator } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Header from "./components/Header";
import ComicListItem from "./components/ComicListItem";

class App extends Component {
  state = {
    comics: [],
    isLoading: true,
    fontLoaded: false
  };

  fetchFonts = () => {
    return Font.loadAsync({
      bangers: require("./assets/fonts/Bangers-Regular.ttf")
    });
  };

  fetchComics = async () => {
    const resp = await fetch("http://xkcd.com/info.0.json");
    const data = await resp.json();
    for (let i = data.num - 7; i <= data.num; i++) {
      const response = await fetch(`http://xkcd.com/${i}/info.0.json`);
      const singleComic = await response.json();
      this.setState({ comics: [...this.state.comics, singleComic] });
    }
  };

  componentDidMount() {
    this.fetchComics();
    this.setState({ isLoading: false });
  }

  render() {
    const { isLoading, comics, fontLoaded } = this.state;

    if (!fontLoaded) {
      return (
        <AppLoading
          startAsync={this.fetchFonts}
          onFinish={() => this.setState({ fontLoaded: true })}
        />
      );
    }
    return (
      <AppWrapper>
        <Header />
        <ListWrapper>
          {isLoading ? (
            <ActivityIndicator size="large" color="#000000" />
          ) : (
            comics
              .reverse()
              .map((item, index) => <ComicListItem key={index} comic={item} />)
          )}
        </ListWrapper>
      </AppWrapper>
    );
  }
}

export default App;

const AppWrapper = styled.View`
  background-color: #e9ddcb;
  flex: 1;
`;

const ListWrapper = styled.ScrollView`
  padding: 30px;
`;
