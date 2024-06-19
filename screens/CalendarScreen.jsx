import React, { useEffect, useState } from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import TitleCard from "../components/ui/TitleCard";
import Section from "../components/ui/Section";
import MonthModal from "../components/modal/MonthModal";

const weekly = ["월", "화", "수", "목", "금", "토", "일"];

const CalendarScreen = () => {
  const today = new Date();
  const nowYear = today.getFullYear();
  const nowMonth = today.getMonth();

  const [dateArr, setDateArr] = useState([]);
  const [year, setYear] = useState(nowYear);
  const [month, setMonth] = useState(nowMonth);

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

  const makeCalendar = (year, monthIdx) => {
    let preMonth = [];
    let nextMonth = [];
    let thisMonth = [];
    const preMonthLast = new Date(year, monthIdx, 0);
    const thisMonthLast = new Date(year, monthIdx + 1, 0);
    const preLastDay = preMonthLast.getDay();
    const thisLastDay = thisMonthLast.getDay();
    const preLastDate = preMonthLast.getDate();
    const thisLastDate = thisMonthLast.getDate();

    const generateMonthArray = (start, end) => {
      const result = [];
      for (let i = start; i <= end; i++) {
        result.push({ date: i, colors: [] });
      }
      return result;
    };

    if (preLastDay !== 0) {
      preMonth.push(
        ...generateMonthArray(preLastDate - preLastDay + 1, preLastDate),
      );
      nextMonth.push(...generateMonthArray(1, thisLastDate - thisLastDay));
    }
    thisMonth.push(...generateMonthArray(1, thisLastDate));

    const calendarNums = [...preMonth, ...thisMonth, ...nextMonth];
    let weekArr = [];
    for (let i = 0; i < 35; i += 7) {
      weekArr.push(calendarNums.slice(i, i + 7));
    }
    return weekArr;
  };

  useEffect(() => {
    setDateArr(makeCalendar(nowYear, nowMonth));
  }, [nowYear, nowMonth]);
  return (
    <>
      <Section>
        <TitleCard>
          <Pressable style={styles.dropDownBtn} onPress={openModalHandler}>
            <View style={styles.dropDownVal}>
              <Text style={styles.year}>{year}</Text>
              <Text style={styles.month}>{month + 1}월</Text>
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
            {dateArr.length > 0 &&
              dateArr.map((w, i) => (
                <View style={styles.weekContainer} key={i}>
                  {w.map((date, idx) => (
                    <View style={styles.daySquare} key={idx}>
                      <Text style={styles.dayNum}>{date.date}</Text>
                      <View style={styles.circleContainer}>
                        {date.colors.map((color, cIdx) => (
                          <View style={styles.circle} key={cIdx}></View>
                        ))}
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
        year={year}
        month={month}
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
    paddingVertical: 10,
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
