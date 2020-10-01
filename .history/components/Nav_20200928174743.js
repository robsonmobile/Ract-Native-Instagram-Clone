import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Nav = () => {
  return (
    <View style={styles.nav}>
      <Text>dasd</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    marginTop: 15,
    backgroundColor: "#f9f9f9",
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
});

export default Nav;
