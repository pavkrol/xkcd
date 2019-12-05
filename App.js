import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  ScrollView
} from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

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
    const { isLoading, comics, fontLoaded } = this.state;
    const fetchFonts = this.fetchFonts;
    if (!fontLoaded) {
      return (
        <AppLoading
          startAsync={fetchFonts}
          onFinish={() => this.setState({ fontLoaded: true })}
        />
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.logo}>xkcd</Text>
        </View>
        <ScrollView style={styles.content}>
          {isLoading ? (
            <ActivityIndicator size="large" color="#000000" />
          ) : (
            comics.reverse().map((item, index) => (
              <View key={index}>
                <Text>{item.title}</Text>
                <Image
                  source={{ uri: item.img }}
                  style={{ width: 200, height: 200 }}
                />
              </View>
            ))
          )}
        </ScrollView>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  logo: {
    fontFamily: "Arial",
    fontSize: 30,
    fontFamily: "bangers"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  topBar: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C3D0E7",
    width: "100%",
    height: 50,
    marginTop: 20
  },
  content: {
    backgroundColor: "#E9DDCB",
    width: "100%",
    height: "100%",
    padding: 20
  }
});
