import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TitleCard from "../components/ui/TitleCard";
import Section from "../components/ui/Section";
import MonthModal from "../components/modal/MonthModal";

const weekly = ["월", "화", "수", "목", "금", "토", "일"];

const CalendarScreen = ({ route }) => {
  const { time } = route.params;

  const today = new Date();
  const nowYear = today.getFullYear();
  const nowMonth = today.getMonth();

  const [dateArr, setDateArr] = useState([]);
  const [year, setYear] = useState(nowYear);
  const [month, setMonth] = useState(nowMonth + 1);

  const [now, setNow] = useState(time);

  const [allData, setAllData] = useState([]);

  const [isDateModal, setIsDateModal] = useState(false);

  const openModalHandler = () => {
    setIsDateModal(true);
  };

  const closeModalHandler = () => {
    setIsDateModal(false);
  };

  const confirmMonthHandler = value => {
    const { year, month } = value;
    setYear(year);
    setMonth(month);
    setIsDateModal(false);
  };

  const clickDateSquareHandler = date => {
    const { date: clickedDate } = date;
    // navigation하면서 params로 날짜를 넘겨줘야됨
  };

  const makeCalendar = (year, month) => {
    const monthIdx = month - 1;
    let preMonth = [];
    let nextMonth = [];
    let thisMonth = [];
    const preMonthLast = new Date(year, monthIdx, 0);
    const thisMonthLast = new Date(year, monthIdx + 1, 0);
    const preLastDay = preMonthLast.getDay();
    const thisLastDay = thisMonthLast.getDay();
    const preLastDate = preMonthLast.getDate();
    const thisLastDate = thisMonthLast.getDate();

    const generateMonthArray = (start, end, isCurrentMonth) => {
      const result = [];
      for (let i = start; i <= end; i++) {
        result.push({ date: i, colors: [], isCurrentMonth });
      }
      return result;
    };

    if (preLastDay !== 0) {
      preMonth.push(
        ...generateMonthArray(preLastDate - preLastDay + 1, preLastDate, false),
      );
      nextMonth.push(
        ...generateMonthArray(1, thisLastDate - thisLastDay, false),
      );
    }
    thisMonth.push(...generateMonthArray(1, thisLastDate, true));

    const calendarNums = [...preMonth, ...thisMonth, ...nextMonth];
    let weekArr = [];
    for (let i = 0; i < 35; i += 7) {
      weekArr.push(calendarNums.slice(i, i + 7));
    }
    return weekArr;
  };

  const getAllData = async () => {
    const allKeys = await AsyncStorage.getAllKeys();
    const filteredKey = allKeys.filter(key => key.startsWith(now));

    const allData = await Promise.all(
      filteredKey.map(async key => {
        const data = JSON.parse(await AsyncStorage.getItem(key));
        return data;
      }),
    );

    const mergedData = [].concat(...allData);
    setAllData(mergedData);
  };

  useEffect(() => {
    setDateArr(makeCalendar(year, month));
  }, [year, month]);

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <Section>
        <TitleCard>
          <Pressable style={styles.dropDownBtn} onPress={openModalHandler}>
            <View style={styles.dropDownVal}>
              <Text style={styles.year}>{year}</Text>
              <Text style={styles.month}>{month}월</Text>
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
                    <TouchableWithoutFeedback
                      style={styles.daySquare}
                      key={idx}
                      onPress={() => clickDateSquareHandler(date)}
                    >
                      <View style={styles.daySquare}>
                        <Text
                          style={[
                            styles.dayNum,
                            !date.isCurrentMonth && styles.notCurrentMonth,
                          ]}
                        >
                          {date.date}
                        </Text>
                        <View style={styles.circleContainer}>
                          {date.colors.map((color, cIdx) => (
                            <View style={styles.circle} key={cIdx}></View>
                          ))}
                        </View>
                      </View>
                    </TouchableWithoutFeedback>
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
  notCurrentMonth: {
    color: "#bbb",
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
