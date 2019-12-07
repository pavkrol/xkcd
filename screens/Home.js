import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import Header from "../components/Header";
import MenuList from "../components/MenuList";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const Home = ({ navigation }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  const fetchFonts = () => {
    return Font.loadAsync({
      bangers: require("../assets/fonts/Bangers-Regular.ttf"),
      lato: require("../assets/fonts/Lato-Regular.ttf")
    });
  };

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    <View>
      <Header content="xkcd" />
      <MenuList navigation={navigation} />
    </View>
  );
};

export default Home;
