import React from "react";
import { View, StyleSheet } from "react-native";

const TitleCard = ({ children }) => {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.titleInner}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    height: 60,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  titleInner: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default TitleCard;
