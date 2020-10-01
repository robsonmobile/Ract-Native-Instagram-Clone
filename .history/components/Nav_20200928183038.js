import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons'; 

const Nav = ({navigation}) => {
  return (
    <View style={styles.nav}>
      <Ionicons name="ios-arrow-back" size={24} color="black" onPress={()=>navigation.navigate("Homepage")}/>
      <Text>dasd</Text>
      <Feather name="more-vertical" size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    marginTop: 20,
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
