import React, { useState } from "react";
import { View, Image, Pressable, Text, StyleSheet } from "react-native";
import Section from "../components/ui/Section";
import TitleCard from "../components/ui/TitleCard";
import Item from "../components/Item";
import AddModal from "../components/AddModal";

const ListScreen = () => {
  const [isModal, setIsModal] = useState(false);

  const openModalHandler = () => {
    setIsModal(true);
  };

  const closeModalHandler = () => {
    setIsModal(false);
  };

  return (
    <>
      <Section>
        <TitleCard>
          <Pressable style={styles.addBtn} onPress={openModalHandler}>
            <Image style={styles.addImg} source={require("../assets/images/plus.png")} />
          </Pressable>
          <View style={styles.dateContainer}>
            <Pressable style={styles.calendarBtn}>
              <Image style={styles.calendarImg} source={require("../assets/images/calendar.png")} />
            </Pressable>
            <Text style={styles.dateText}>2024.04.09</Text>
          </View>
        </TitleCard>
        <View style={styles.listContainer}>
          <Item checked={true} />
          <Item />
        </View>
      </Section>
      <AddModal visible={isModal} close={closeModalHandler} />
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
