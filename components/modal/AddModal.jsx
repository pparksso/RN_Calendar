import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, TextInput, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ModalCard from "../ui/ModalCard";
import ModalBtnLayout from "../ui/ModalBtnLayout";

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
  const { visible, close, today } = props;

  const [text, setText] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const clearHandler = () => {
    setText("");
    setSelectedColor("");
  };

  const saveHandler = () => {
    if (!text.trim()) return false;
    else if (!selectedColor) return false;
    else {
      const obj = {
        text,
        color: selectedColor,
        checked: false,
      };
      const getItem = async () => {
        const storageData = JSON.parse(await AsyncStorage.getItem(today));
        let arr = storageData ? [...storageData, obj] : [obj];
        await AsyncStorage.setItem(today, JSON.stringify(arr));
      };
      getItem();
      clearHandler();
      close();
    }
  };

  const closeHandler = () => {
    close();
    clearHandler();
  };

  const changeText = value => {
    setText(value);
  };
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <ModalCard>
        <TextInput
          style={styles.input}
          autoFocus={true}
          maxLength={16}
          onChangeText={changeText}
        />
        <View style={styles.colorBox}>
          {colors.map((color, idx) => (
            <Pressable
              key={idx}
              style={[
                styles.color,
                { backgroundColor: color },
                selectedColor === color && styles.selectedColor,
              ]}
              onPress={() => setSelectedColor(color)}
            />
          ))}
        </View>
        <ModalBtnLayout
          confirmMsg="Save"
          confirmFunc={saveHandler}
          closeFunc={closeHandler}
        />
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
  selectedColor: {
    borderWidth: 1,
  },
});

export default AddModal;
