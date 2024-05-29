import React, { useState } from "react";
import {
  Modal,
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
  Text,
} from "react-native";
import ModalCard from "../ui/ModalCard";
import ModalBtnLayout from "../ui/ModalBtnLayout";

const { height: windowHeight } = Dimensions.get("window");

const getCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // getMonth() returns 0-based month
  return { year, month };
};

const generateYears = () => {
  const years = [];
  for (let i = 1990; i <= 2050; i++) {
    years.push(i);
  }
  return years;
};

const MonthModal = props => {
  const { visible, confirm, close } = props;

  const { year, month: currentMonth } = getCurrentDate();
  const [selectedYear, setSelectedYear] = useState(year);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  const years = generateYears();
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  const renderPickerItem = (item, isSelected) => (
    <Text style={[styles.pickerItem, isSelected && styles.selectedItem]}>
      {item}
    </Text>
  );

  const handleYearChange = year => {
    setSelectedYear(year);
  };

  const handleMonthChange = month => {
    setSelectedMonth(month);
  };

  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <ModalCard>
        <View style={styles.selectsContainer}>
          <ScrollView
            contentContainerStyle={styles.selectList}
            showsVerticalScrollIndicator={false}
            onScroll={event => {
              const yOffset = event.nativeEvent.contentOffset.y;
              const index = Math.round(yOffset / styles.pickerItem.height);
              handleYearChange(years[index]);
            }}
            snapToInterval={styles.pickerItem.height}
            decelerationRate="fast"
          >
            {years.map(year => renderPickerItem(year, year === selectedYear))}
          </ScrollView>
          <ScrollView
            contentContainerStyle={styles.selectList}
            showsVerticalScrollIndicator={false}
            onScroll={event => {
              const yOffset = event.nativeEvent.contentOffset.y;
              const index = Math.round(yOffset / styles.pickerItem.height);
              handleMonthChange(months[index]);
            }}
            snapToInterval={styles.pickerItem.height}
            decelerationRate="fast"
          >
            {months.map(month =>
              renderPickerItem(month, month === selectedMonth),
            )}
          </ScrollView>
        </View>
        <ModalBtnLayout
          confirmMsg="Confirm"
          confirmFunc={confirm}
          closeFunc={close}
        />
      </ModalCard>
    </Modal>
  );
};

const styles = StyleSheet.create({
  selectsContainer: {
    maxHeight: "40%",
    flexDirection: "row",
  },
  selectList: {
    alignItems: "center",
    justifyContent: "center",
  },
  pickerItem: {
    fontSize: 24,
    height: 30,
    lineHeight: 30,
    color: "#aaa",
  },
  selectedItem: {
    color: "#333",
    fontWeight: "bold",
  },
});

export default MonthModal;
