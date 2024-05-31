import React, { useState, useCallback } from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import TitleCard from "../components/ui/TitleCard";
import Section from "../components/ui/Section";
import MonthModal from "../components/modal/MonthModal";

const weekly = ["월", "화", "수", "목", "금", "토", "일"];

const CalendarScreen = () => {
  const [isDateModal, setIsDateModal] = useState(false);

  const openModalHandler = () => {
    setIsDateModal(true);
  };

  const closeModalHandler = () => {
    setIsDateModal(false);
  };

  const confirmMonthHandler = () => {
    console.log("confirm");
  };

  return (
    <>
      <Section>
        <TitleCard>
          <Pressable style={styles.dropDownBtn} onPress={openModalHandler}>
            <View style={styles.dropDownVal}>
              <Text style={styles.year}>2024</Text>
              <Text style={styles.month}>3월</Text>
            </View>
            <Image
              source={require("../assets/images/arrow-down.png")}
              style={styles.arrowImg}
            />
          </Pressable>
        </TitleCard>
        <View>
          <View style={styles.calendarHeader}>
            {weekly.map(t => (
              <Text style={styles.weeklyText}>{t}</Text>
            ))}
          </View>
        </View>
      </Section>
      <MonthModal
        visible={isDateModal}
        confirm={confirmMonthHandler}
        close={closeModalHandler}
      />
    </>
  );
};

const styles = StyleSheet.create({
  dropDownBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  dropDownVal: {
    marginRight: 10,
    alignItems: "center",
  },
  year: {
    fontSize: 15,
  },
  month: {
    fontSize: 20,
    fontWeight: "700",
  },
  arrowImg: {
    width: 20,
    height: 20,
  },
  calendarHeader: {
    flexDirection: "row",
    paddingVertical: 10,
    backgroundColor: "#ddd",
  },
  weeklyText: {
    flexGrow: 1,
    textAlign: "center",
    fontWeight: "600",
    fontSize: 17,
  },
});

export default CalendarScreen;
