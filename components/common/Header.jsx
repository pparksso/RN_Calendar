import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Today's Check</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
});

export default Header;
