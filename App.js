import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Hamburger from "./components/Hamburger";
import SwitchTheme from "./components/SwitchTheme";

class App extends Component {
  constructor() {
    super();
    this.state = {
      comics: [],
      isLoading: true
    };
  }

  async componentDidMount() {
    const resp = await fetch("http://xkcd.com/info.0.json");
    const data = await resp.json();
    for (let i = data.num - 7; i <= data.num; i++) {
      const response = await fetch(`http://xkcd.com/${i}/info.0.json`);
      const singleComic = await response.json();
      this.setState({ comics: [...this.state.comics, singleComic] });
    }
    this.setState({ isLoading: false });
  }

  render() {
    const { isLoading, comics } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text>xkcd</Text>
        </View>
        <View style={styles.content}>
          {!isLoading &&
            comics
              .reverse()
              .map((item, index) => <Text key={index}>{item.title}</Text>)}
        </View>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  topBar: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff00ff",
    width: "100%",
    height: 50,
    marginTop: 20
  },
  content: {
    backgroundColor: "#00ffff",
    width: "100%",
    height: "100%",
    padding: 20
  }
});
