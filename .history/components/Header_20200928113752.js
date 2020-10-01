import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from '@expo/vector-icons'; 
const Header = () => {
  return (
    <View style={styles.header}>
      <Feather name="md-checkmark-circle" size={32} color="green" />
      <Text>Instagram</Text>
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
