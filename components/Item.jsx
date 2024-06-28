import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Item = props => {
  const { item, click, isCheck } = props;
  const [checked, setChecked] = useState(false);

  const checkHandler = () => {
    isCheck();
  };

  useEffect(() => {
    if (item.checked) setChecked(true);
    else setChecked(false);
  }, [item]);

  return (
    <View style={styles.itemContainer}>
      <Pressable
        style={[styles.checkBox, checked && styles.checkedBox]}
        onPress={checkHandler}
      >
        {checked && <Text style={styles.checkMark}>✓</Text>}
      </Pressable>
      <Pressable style={styles.labelContainer} onPress={click}>
        <Text style={styles.label}>{item.text}</Text>
        <View style={[styles.color, { backgroundColor: item.color }]}></View>
      </Pressable>
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
    justifyContent: "space-between",
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
