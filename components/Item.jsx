import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Item = props => {
  const { item, click, isCheck, isDelete } = props;
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
      <View style={styles.labelContainer}>
        <Pressable onPress={click} style={styles.valueContaier}>
          <Text style={styles.label}>{item.text}</Text>
          <View style={[styles.color, { backgroundColor: item.color }]}></View>
        </Pressable>
        <Pressable onPress={isDelete}>
          <Text style={styles.delText}>X</Text>
        </Pressable>
      </View>
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
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  valueContaier: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 5,
  },
  delText: {
    fontSize: 16,
    fontWeight: "bold",
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
