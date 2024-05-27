import React from "react";
import { Modal, View } from "react-native";
import ModalCard from "../ui/ModalCard";

const MonthModal = props => {
  const { visible } = props;
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <ModalCard></ModalCard>
    </Modal>
  );
};

export default MonthModal;
