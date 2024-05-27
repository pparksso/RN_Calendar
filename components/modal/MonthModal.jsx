import React from "react";
import { Modal, View } from "react-native";
import ModalCard from "../ui/ModalCard";
import ModalBtnLayout from "../ui/ModalBtnLayout";

const MonthModal = props => {
  const { visible, confirm, close } = props;
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <ModalCard>
        <ModalBtnLayout
          confirmMsg="Confirm"
          confirmFunc={confirm}
          closeFunc={close}
        />
      </ModalCard>
    </Modal>
  );
};

export default MonthModal;
