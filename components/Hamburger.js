import React from "react";
import { StyleSheet, View } from "react-native";

const Hamburger = () => {
  return (
    <View style={styles.hamburger}>
      <View style={styles.item1} />
      <View style={styles.item2} />
      <View style={styles.item3} />
    </View>
  );
};

export default Hamburger;

const styles = StyleSheet.create({
  hamburger: {
    justifyContent: "center",
    alignItems: "center",
    width: "15%",
    height: "100%",
    backgroundColor: "peru"
  },
  item1: {
    width: "50%",
    height: 3,
    marginBottom: 5,
    backgroundColor: "#000",
    borderRadius: 3
  },
  item2: {
    width: "50%",
    height: 3,
    marginBottom: 5,
    backgroundColor: "#000",
    borderRadius: 3
  },
  item3: {
    width: "50%",
    height: 3,
    backgroundColor: "#000",
    borderRadius: 3
  }
});
