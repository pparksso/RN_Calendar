import React, { useEffect, useRef, useState } from "react";
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

const generateYears = () => {
  const years = [];
  for (let i = 1990; i <= 2050; i++) {
    years.push(i);
  }
  return years;
};

const MonthModal = props => {
  const { visible, confirm, close, year, month } = props;

  const yearScrollRef = useRef(null);
  const monthScrollRef = useRef(null);

  const [selectedYear, setSelectedYear] = useState(year);
  const [selectedMonth, setSelectedMonth] = useState(month);

  const years = generateYears();
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const scrollYears = ["", ...years, ""];
  const scrollMonths = ["", ...months, ""];

  const renderPickerItem = (item, isSelected) => (
    <Text
      style={[styles.pickerItem, isSelected && styles.selectedItem]}
      key={item}
    >
      {item}
    </Text>
  );
  const handleYearChange = year => {
    setSelectedYear(year);
  };

  const handleMonthChange = month => {
    setSelectedMonth(month);
  };

  const confirmHandler = () => {
    confirm({ year: selectedYear, month: selectedMonth });
  };

  useEffect(() => {
    const initialYearIdx = years.indexOf(year);
    const initialMonthIdx = months.indexOf(month);
    if (yearScrollRef.current && monthScrollRef.current) {
      setTimeout(() => {
        yearScrollRef.current.scrollTo({
          y: initialYearIdx * styles.pickerItem.height,
          animated: false,
        });
        monthScrollRef.current.scrollTo({
          y: initialMonthIdx * styles.pickerItem.height,
          animated: false,
        });
      }, 0);
    }
  }, [visible]);

  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <ModalCard>
        <View style={styles.selectsContainer}>
          <ScrollView
            ref={yearScrollRef}
            contentContainerStyle={styles.selectList}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={event => {
              const yOffset = event.nativeEvent.contentOffset.y;
              const index = Math.round(yOffset / styles.pickerItem.height) + 1;
              if (index >= 0 && index < scrollYears.length)
                handleYearChange(scrollYears[index]);
            }}
            snapToInterval={styles.pickerItem.height}
            decelerationRate="fast"
          >
            {scrollYears.map(year =>
              renderPickerItem(year, year === selectedYear),
            )}
          </ScrollView>
          <ScrollView
            ref={monthScrollRef}
            contentContainerStyle={styles.selectList}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={event => {
              const yOffset = event.nativeEvent.contentOffset.y;
              const index = Math.round(yOffset / styles.pickerItem.height) + 1;
              if (index >= 0 && index < scrollMonths.length) {
                handleMonthChange(scrollMonths[index]);
              }
            }}
            snapToInterval={styles.pickerItem.height}
            decelerationRate="fast"
          >
            {scrollMonths.map(month =>
              renderPickerItem(month, month === selectedMonth),
            )}
          </ScrollView>
        </View>
        <ModalBtnLayout
          confirmMsg="Confirm"
          confirmFunc={confirmHandler}
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
