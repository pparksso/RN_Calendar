import React from "react";
import { StyleSheet, View } from "react-native";

const Section = ({ children }) => {
  return <View style={styles.sectionContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Section;
