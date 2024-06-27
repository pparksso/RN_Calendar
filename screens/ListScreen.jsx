import React, { useState } from "react";
import { View, Image, Pressable, Text, StyleSheet } from "react-native";
import Section from "../components/ui/Section";
import TitleCard from "../components/ui/TitleCard";
import Item from "../components/Item";
import AddModal from "../components/modal/AddModal";
import { useNavigation } from "@react-navigation/native";

const ListScreen = () => {
  const navigation = useNavigation();

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  const [isModal, setIsModal] = useState(false);

  const openModalHandler = () => {
    setIsModal(true);
  };

  const saveHandler = () => {
    // console.log("save");
  };

  const closeModalHandler = () => {
    setIsModal(false);
  };

  const goCalendarHandler = () => {
    navigation.navigate("Calendar", {
      // params 전달
    });
  };

  return (
    <>
      <Section>
        <TitleCard>
          <Pressable style={styles.addBtn} onPress={openModalHandler}>
            <Image
              style={styles.addImg}
              source={require("../assets/images/plus.png")}
            />
          </Pressable>
          <View style={styles.dateContainer}>
            <Pressable style={styles.calendarBtn} onPress={goCalendarHandler}>
              <Image
                style={styles.calendarImg}
                source={require("../assets/images/calendar.png")}
              />
            </Pressable>
            <Text style={styles.dateText}>
              {`${year}.${month.toString().padStart(2, "0")}.${date
                .toString()
                .padStart(2, "0")}`}
            </Text>
          </View>
        </TitleCard>
        <View style={styles.listContainer}>
          <Item checked={true} />
          <Item />
        </View>
      </Section>
      <AddModal
        visible={isModal}
        save={saveHandler}
        close={closeModalHandler}
      />
    </>
  );
};

const styles = StyleSheet.create({
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
  listContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
});

export default ListScreen;
