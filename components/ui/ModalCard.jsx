import React from "react";
import { View, StyleSheet } from "react-native";

const ModalCard = ({ children }) => {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalInner}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalInner: {
    width: "70%",
    borderRadius: 5,
    backgroundColor: "#fff",
    padding: 30,
  },
});

export default ModalCard;
