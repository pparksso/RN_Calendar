import React from "react";
import { Pressable, Image, View, Text, StyleSheet } from "react-native";
import { useNavigation, useNavigationState } from "@react-navigation/native";

const Header = () => {
  const navitation = useNavigation();

  const routeNames = useNavigationState(state => state.routeNames);
  const currentIdx = useNavigationState(state => state.index);
  const currentRoute = routeNames[currentIdx];

  return (
    <View style={styles.header}>
      {currentRoute === "Calendar" && (
        <Pressable style={styles.backBtn} onPress={() => navitation.goBack()}>
          <Image
            source={require("../../assets/images/arrow-left.png")}
            style={styles.leftImage}
          />
        </Pressable>
      )}
      <Text style={styles.title}>Today's Check</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    justifyContent: "center",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
  },
  leftImage: {
    width: 20,
    height: 20,
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
});

export default Header;
