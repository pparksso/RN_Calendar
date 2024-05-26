import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Item = props => {
  const { checked } = props;

  return (
    <View style={styles.itemContainer}>
      <Pressable style={styles.labelContainer}>
        <View style={[styles.checkBox, checked && styles.checkedBox]}>
          {checked && <Text style={styles.checkMark}>✓</Text>}
        </View>
        <Text style={styles.label}>수영수영수영수영영수영</Text>
      </Pressable>
      <View style={styles.color}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  labelContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  checkBox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  checkedBox: {
    backgroundColor: "#000",
  },
  checkMark: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: "500",
  },
  color: {
    backgroundColor: "#000",
    width: 20,
    height: 20,
    borderRadius: 100,
  },
});

export default Item;
