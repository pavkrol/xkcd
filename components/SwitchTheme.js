import React from "react";
import { View, StyleSheet } from "react-native";

const SwitchTheme = () => {
  return <View style={styles.switchTheme} />;
};

export default SwitchTheme;

const styles = StyleSheet.create({
  switchTheme: {
    width: "15%",
    height: "100%",
    backgroundColor: "blue"
  }
});
