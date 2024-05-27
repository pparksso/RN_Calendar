import React, { useState, useCallback } from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import MonthPicker from "react-native-month-year-picker";
import TitleCard from "../components/ui/TitleCard";
import Section from "../components/ui/Section";

const CalendarScreen = () => {
  const [date, setDate] = useState(new Date());
  const [isDropDown, setIsDropDown] = useState(false);

  const openDropDownHandler = () => {
    setIsDropDown(true);
  };

  const showPicker = useCallback(value => setIsDropDown(value), []);

  const onValueChange = useCallback(
    (event, newDate) => {
      const selectedDate = newDate || date;

      showPicker(false);
      setDate(selectedDate);
    },
    [date, showPicker],
  );
  return (
    <Section>
      <TitleCard>
        <Pressable style={styles.dropDownBtn} onPress={openDropDownHandler}>
          <View style={styles.dropDownVal}>
            <Text style={styles.year}>2024</Text>
            <Text style={styles.month}>3월</Text>
          </View>
          <Image
            source={require("../assets/images/arrow-down.png")}
            style={styles.arrowImg}
          />
        </Pressable>
        {isDropDown && (
          <MonthPicker
            onChange={onValueChange}
            value={date}
            minimumDate={new Date()}
            maximumDate={new Date(2025, 5)}
            locale="ko"
          />
        )}
      </TitleCard>
      <View>
        <Text>calendar</Text>
      </View>
    </Section>
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
});

export default CalendarScreen;
