import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Camera } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <Camera name="md-checkmark-circle" size={32} color="green" />
      <Text>Instagram</Text>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "lightgray",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default Header;
