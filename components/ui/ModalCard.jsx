import React from "react";
import { View, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const ModalCard = ({ children }) => {
  const { name } = useRoute();
  return (
    <View style={styles.modalContainer}>
      <View
        style={[
          styles.modalInner,
          {
            height: name === "Calendar" ? "30%" : "auto",
          },
        ]}
      >
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalInner: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    width: "70%",
    borderRadius: 5,
    backgroundColor: "#fff",
    padding: 30,
  },
});

export default ModalCard;
