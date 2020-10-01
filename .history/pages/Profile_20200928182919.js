import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Nav from "../components/Nav";

const Profile = ({navigation}) => {
  return (
    <View>
      <Nav />
      <Text onPress={()=>navigation.navigate("Homepage")}>Press Here</Text>
    </View>
  );
};

export default Profile;
