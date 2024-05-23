import React from "react";
import { View, StyleSheet } from "react-native";

const TitleCard = ({ children }) => {
  return <View style={styles.titleContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  titleContainer: {
    height: 60,
    justifyContent: "center",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "#000",
  },
});

export default TitleCard;
