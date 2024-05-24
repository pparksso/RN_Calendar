import React from "react";
import { View, Image, Pressable, Text, StyleSheet } from "react-native";
import Section from "../components/ui/Section";
import TitleCard from "../components/ui/TitleCard";

const ListScreen = () => {
  return (
    <Section>
      <TitleCard>
        <View style={styles.titleContainer}>
          <Pressable style={styles.addBtn}>
            <Image style={styles.addImg} source={require("../assets/images/plus.png")} />
          </Pressable>
          <View style={styles.dateContainer}>
            <Pressable style={styles.calendarBtn}>
              <Image style={styles.calendarImg} source={require("../assets/images/calendar.png")} />
            </Pressable>
            <Text style={styles.dateText}>2024.04.09</Text>
          </View>
        </View>
      </TitleCard>
      <Text>list</Text>
    </Section>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addBtn: {},
  addImg: {
    width: 40,
    height: 40,
  },
  dateContainer: {
    justifyContent: "center",
  },
  calendarBtn: {
    alignItems: "center",
  },
  calendarImg: {
    width: 30,
    height: 30,
  },
  dateText: {},
});

export default ListScreen;
