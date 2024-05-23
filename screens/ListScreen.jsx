import React from "react";
import { View, Image, Pressable, Text, StyleSheet } from "react-native";
import Section from "../components/ui/Section";
import TitleCard from "../components/ui/TitleCard";

const ListScreen = () => {
  return (
    <Section>
      <TitleCard>
        <View>
          <Image />
          <View>
            <Pressable>
              <Image />
            </Pressable>
            <Text></Text>
          </View>
        </View>
        <Text>title</Text>
      </TitleCard>
      <Text>list</Text>
    </Section>
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
