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
    backgroundColor: "#f9f9f9",
    borderBottomWidth: 0.2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
});

export default Header;
