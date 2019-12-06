import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import Header from "./Header";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const Home = ({ navigation }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  const fetchFonts = () => {
    return Font.loadAsync({
      bangers: require("../assets/fonts/Bangers-Regular.ttf")
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
      <Header />
      <Button
        title="go to list"
        onPress={() => navigation.navigate("ComicList")}
      />
    </View>
  );
};

export default Home;
