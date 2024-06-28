import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Item = props => {
  const { item, click } = props;

  return (
    <View style={styles.itemContainer}>
      <Pressable style={styles.labelContainer} onPress={click}>
        <View style={[styles.checkBox, item.checked && styles.checkedBox]}>
          {item.checked && <Text style={styles.checkMark}>✓</Text>}
        </View>
        <Text style={styles.label}>{item.text}</Text>
      </Pressable>
      <View style={[styles.color, { backgroundColor: item.color }]}></View>
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
    width: 20,
    height: 20,
    borderRadius: 100,
  },
});

export default Item;
