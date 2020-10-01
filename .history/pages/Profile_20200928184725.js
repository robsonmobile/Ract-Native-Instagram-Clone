import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Nav from "../components/Nav";

const Profile = ({ navigation }) => {
  return (
    <View>
      <Nav navigation={navigation} title="safak" />
      <View style={styles.profileUser}>
        <Text>ssad</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profilePicture: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
});

export default Profile;
