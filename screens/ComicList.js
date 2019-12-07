import React, { Component } from "react";
import styled, { css } from "styled-components";
import { ActivityIndicator, RefreshControl, Platform } from "react-native";
import ComicListItem from "../components/ComicListItem";
import Header from "../components/Header";

class ComicList extends Component {
  state = {
    comics: [],
    comicsLoaded: false,
    refreshing: false
  };

  wait = timeout => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  };

  onRefresh = () => {
    this.setState({ refreshing: true });
    this.wait(1000).then(() => {
      this.fetchComics();
      this.setState({ refreshing: false });
    });
  };

  fetchComics = async () => {
    try {
      const resp = await fetch("http://xkcd.com/info.0.json");
      const data = await resp.json();
      for (let i = data.num - 7; i <= data.num; i++) {
        const response = await fetch(`http://xkcd.com/${i}/info.0.json`);
        const singleComic = await response.json();
        this.setState({ comics: [...this.state.comics, singleComic] });
      }
    } catch (error) {
      console.error(error);
    }
    this.setState({ comics: this.state.comics.reverse() });
  };

  chooseComic = comic => {
    this.props.navigation.navigate("ComicFullScreen", { comic });
  };

  async componentDidMount() {
    await this.fetchComics();
    this.setState({ comicsLoaded: true });
  }

  render() {
    const { comicsLoaded, comics, refreshing } = this.state;

    return (
      <ComicListWrapper>
        <Header content="recent comics" />
        <ListWrapper
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={this.onRefresh}
            />
          }
        >
          {!comicsLoaded ? (
            <ActivityIndicator size="large" color="#000000" />
          ) : (
            comics.map((item, index) => (
              <ComicListItem
                key={index}
                comic={item}
                chooseComic={this.chooseComic}
              />
            ))
          )}
        </ListWrapper>
      </ComicListWrapper>
    );
  }
}

export default ComicList;

const ComicListWrapper = styled.View`
  background-color: #e9ddcb;
  flex: 1;
`;

const ListWrapper = styled.ScrollView`
  ${Platform.select({
    ios: css`
      padding: 30px;
    `,
    android: css`
      margin: 30px;
    `
  })};
`;
