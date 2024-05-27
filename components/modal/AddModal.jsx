import React from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import ModalCard from "../ui/ModalCard";

const colors = [
  "#FF6347", // 토마토 (빨강)
  "#FFA500", // 오렌지 (주황)
  "#FFD700", // 골드 (노랑)
  "#32CD32", // 라임그린 (초록)
  "#1E90FF", // 다저블루 (파랑)
  "#4169E1", // 로열블루 (남색)
  "#8A2BE2", // 블루바이올렛 (보라)
];

const AddModal = props => {
  const { visible } = props;
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <ModalCard>
        <TextInput style={styles.input} autoFocus={true} maxLength={16} />
        <View style={styles.colorBox}>
          {colors.map((color, idx) => (
            <Pressable
              key={idx}
              style={[styles.color, { backgroundColor: color }]}
            />
          ))}
        </View>
        <View style={styles.btnBox}>
          <Pressable style={styles.btn}>
            <Text style={styles.btnTxt}>Save</Text>
          </Pressable>
          <Pressable style={styles.btn} onPress={props.close}>
            <Text style={styles.btnTxt}>Cancle</Text>
          </Pressable>
        </View>
      </ModalCard>
    </Modal>
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
  input: {
    borderBottomWidth: 1,
    paddingVertical: 5,
    fontSize: 20,
  },
  colorBox: {
    marginTop: 20,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  color: {
    width: 20,
    height: 20,
    borderRadius: 100,
  },
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

export default AddModal;
