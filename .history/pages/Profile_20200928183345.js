import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Nav from "../components/Nav";

const Profile = ({ navigation }) => {
  return (
    <View>
      <Nav navigation={navigation} title="safak"/>
      <Text onPress={() => navigation.goBack()}>Press Here</Text>
    </View>
  );
};

export default Profile;
