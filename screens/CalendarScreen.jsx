import React, { useState, useCallback } from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import TitleCard from "../components/ui/TitleCard";
import Section from "../components/ui/Section";
import MonthModal from "../components/modal/MonthModal";

const weekly = ["월", "화", "수", "목", "금", "토", "일"];
const week = Array(5).fill();
const day = Array(7).fill(10);

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

  // 캘린더 함수 짜기... 일단 짜고 이후 리팩토링
  const today = new Date();
  const current = new Date();
  const dateLoop = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayWeek = today.getDay();
  const todayDate = today.getDate();

  const makeCalendar = (year, month) => {
    const thisMonthFirst = new Date(year, month - 1, 1);
    const preMonthLast = new Date(year, month - 1, 0);
    const thisMonthLast = new Date(year, month, 0);
    const firstDay = thisMonthFirst.getDay();
    const preLastDay = preMonthLast.getDay();
    const thisLastDay = thisMonthLast.getDay();
    const preLastDate = preMonthLast.getDate();
    const thisLastDate = thisMonthLast.getDate();

    if (preLastDay !== 0) {
    }
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
        <View style={styles.calendar}>
          <View style={styles.calendarHeader}>
            {weekly.map(t => (
              <Text style={styles.weeklyText} key={t}>
                {t}
              </Text>
            ))}
          </View>
          <View style={styles.dayContainer}>
            {week.map(_ => (
              <View style={styles.weekContainer} key={_}>
                {day.map(__ => (
                  <View style={styles.daySquare} key={__}>
                    <Text style={styles.dayNum}>10</Text>
                    <View style={styles.circleContainer}>
                      <View style={styles.circle}></View>
                      <View style={styles.circle}></View>
                      <View style={styles.circle}></View>
                      <View style={styles.circle}></View>
                      <View style={styles.circle}></View>
                      <View style={styles.circle}></View>
                      <View style={styles.circle}></View>
                      <View style={styles.circle}></View>
                      <View style={styles.circle}></View>
                    </View>
                  </View>
                ))}
              </View>
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
  calendar: {
    flex: 1,
  },
  calendarHeader: {
    flexDirection: "row",
    paddingVertical: 15,
    backgroundColor: "#ddd",
  },
  weeklyText: {
    flexGrow: 1,
    textAlign: "center",
    fontWeight: "600",
    fontSize: 17,
  },
  dayContainer: {
    height: "100%",
  },
  weekContainer: {
    flexDirection: "row",
    flexGrow: 1,
    borderBottomWidth: 1,
    borderColor: "#aaa",
  },
  daySquare: {
    width: `${100 / 7}%`,
    padding: 3,
  },
  dayNum: {
    textAlign: "right",
    fontSize: 16,
    fontWeight: "700",
  },
  circleContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start",
  },
  circle: {
    backgroundColor: "#000",
    width: 15,
    height: 15,
    borderRadius: 100,
    margin: 1,
  },
});

export default CalendarScreen;
