import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
const Header = () => {
  return (
    <View style={styles.header}>
      <Feather name="camera" size={24} color="black" />
      <Text>Instagram</Text>
      <Feather name="send" size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "lightgray",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5
  },
});

export default Header;
