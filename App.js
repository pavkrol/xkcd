import React, { Component } from "react";
import styled from "styled-components";
import { ActivityIndicator } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Header from "./components/Header";
import ComicListItem from "./components/ComicListItem";
import ComicFullScreen from "./components/ComicFullScreen";

class App extends Component {
  state = {
    comics: [],
    comicsLoaded: false,
    fontLoaded: false,
    isComicChosen: false,
    currentImage: ""
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
    this.setState({ comics: this.state.comics.reverse() });
  };

  chooseComic = imageSrc => {
    this.setState({ currentImage: imageSrc });
    this.setState({ isComicChosen: true });
  };

  goBack = () => {
    this.setState({ isComicChosen: false });
  };

  async componentDidMount() {
    await this.fetchComics();
    this.setState({ comicsLoaded: true });
  }

  render() {
    const {
      comicsLoaded,
      comics,
      fontLoaded,
      currentImage,
      isComicChosen
    } = this.state;

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
        <Header isComicChosen={isComicChosen} goBack={this.goBack} />
        <ListWrapper>
          {!comicsLoaded ? (
            <ActivityIndicator size="large" color="#000000" />
          ) : !isComicChosen ? (
            comics.map((item, index) => (
              <ComicListItem
                key={index}
                comic={item}
                chooseComic={this.chooseComic}
              />
            ))
          ) : (
            <ComicFullScreen imageSrc={currentImage} />
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
