import React, { Component } from "react";
import styled from "styled-components";
import { ActivityIndicator } from "react-native";
import ComicListItem from "../components/ComicListItem";
import Header from "../components/Header";

class ComicList extends Component {
  state = {
    comics: [],
    comicsLoaded: false
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

  chooseComic = comic => {
    this.props.navigation.navigate("ComicFullScreen", { comic });
  };

  async componentDidMount() {
    await this.fetchComics();
    this.setState({ comicsLoaded: true });
  }

  render() {
    const { comicsLoaded, comics } = this.state;

    return (
      <AppWrapper>
        <Header content="recent comics" />
        <ListWrapper>
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
      </AppWrapper>
    );
  }
}

export default ComicList;

const AppWrapper = styled.View`
  background-color: #e9ddcb;
  flex: 1;
`;

const ListWrapper = styled.ScrollView`
  padding: 30px;
`;
