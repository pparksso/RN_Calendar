import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";

const ModalBtnLayout = props => {
  const { confirmMsg, closeFunc, confirmFunc } = props;

  return (
    <View style={styles.btnBox}>
      <Pressable style={styles.btn} onPress={closeFunc}>
        <Text style={styles.btnTxt}>Cancle</Text>
      </Pressable>
      <Pressable style={styles.btn} onPress={confirmFunc}>
        <Text style={styles.btnTxt}>{confirmMsg}</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  btnBox: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  btn: {
    backgroundColor: "#333",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
    marginHorizontal: 10,
  },
  btnTxt: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 17,
  },
});
export default ModalBtnLayout;
