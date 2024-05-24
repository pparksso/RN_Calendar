import React from "react";
import { View, Image, Pressable, Text, StyleSheet } from "react-native";
import Section from "../components/ui/Section";
import TitleCard from "../components/ui/TitleCard";

const ListScreen = () => {
  return (
    <Section>
      <TitleCard>
        <View style={styles.titleContainer}>
          <Image style={styles.addImg} source={require("../assets/images/plus.png")} />
          <View style={styles.dateContainer}>
            <Pressable style={styles.calendarBtn}>
              <Image style={styles.calendarImg} />
            </Pressable>
            <Text style={styles.dateText}></Text>
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
    alignItems: "stretch",
    borderWidth: 1,
    borderColor: "#000",
  },
  addImg: {
    width: 40,
    height: 40,
  },
  dateContainer: {},
  calendarBtn: {},
  calendarImg: {},
  dateText: {},
});

export default ListScreen;
