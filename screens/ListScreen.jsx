import React, { useEffect, useState } from "react";
import { View, Image, Pressable, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Section from "../components/ui/Section";
import TitleCard from "../components/ui/TitleCard";
import Item from "../components/Item";
import AddModal from "../components/modal/AddModal";

const ListScreen = () => {
  const navigation = useNavigation();

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  const [isModal, setIsModal] = useState(false);
  const [list, setList] = useState([]);
  const [savedItem, setSavedItem] = useState({});
  const [selectNo, setSelectNo] = useState(-1);

  const openModalHandler = () => {
    setIsModal(true);
  };

  const closeModalHandler = () => {
    setIsModal(false);
  };

  const formatToday = () => {
    return `${year}${month.toString().padStart(2, "0")}${date
      .toString()
      .padStart(2, "0")}`;
  };

  const storage = async () => {
    const storageData = JSON.parse(await AsyncStorage.getItem(formatToday()));
    return storageData;
  };

  const getData = async () => {
    const data = await storage();
    if (data) {
      setList(data);
    } else {
      setList([]);
    }
  };

  const saveHandler = async (obj, msg) => {
    const storageData = await storage();
    const saveItem = async () => {
      let arr = storageData ? [...storageData, obj] : [obj];
      await AsyncStorage.setItem(formatToday(), JSON.stringify(arr));
    };
    const editItem = async () => {
      let arr = [...storageData];
      arr.splice(selectNo, 1, obj);
      await AsyncStorage.setItem(formatToday(), JSON.stringify(arr));
    };
    if (msg === "save") await saveItem();
    else await editItem();

    await getData();
  };

  const editModalHandler = async idx => {
    const datas = await storage();
    const data = datas[idx];
    setSelectNo(idx);
    setSavedItem(data);
    openModalHandler();
  };

  const checkHaldler = async idx => {
    const datas = await storage();
    let arr = [...datas];
    arr[idx].checked = !arr[idx].checked;
    await AsyncStorage.setItem(formatToday(), JSON.stringify(arr));
    await getData();
  };

  const deleteHandler = async idx => {
    const datas = await storage();
    let arr = [...datas];
    arr.splice(idx, 1);
    await AsyncStorage.setItem(formatToday(), JSON.stringify(arr));
    await getData();
  };

  useEffect(() => {
    getData();
  }, []);

  const goCalendarHandler = () => {
    navigation.navigate("Calendar", {
      time: `${year}${month.toString().padStart(2, "0")}`,
    });
  };

  return (
    <>
      <Section>
        <TitleCard>
          <Pressable
            style={styles.addBtn}
            onPress={() => {
              setSavedItem({});
              openModalHandler();
            }}
          >
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
          {list.map((item, idx) => (
            <Item
              key={idx}
              item={item}
              click={() => editModalHandler(idx)}
              isCheck={() => checkHaldler(idx)}
              isDelete={() => deleteHandler(idx)}
            />
          ))}
        </View>
      </Section>
      <AddModal
        visible={isModal}
        close={closeModalHandler}
        save={saveHandler}
        savedObj={savedItem}
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
