import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Nav from "../components/Nav";

const Profile = ({ navigation }) => {
  return (
    <Image
      style={styles.profilePicture}
      source={{
        uri:
          "https://images.pexels.com/photos/3913498/pexels-photo-3913498.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      }}
    />
  );
};

const styles = StyleSheet.create({
  profilePicture: {
    height: 150,
    width: 150,
    borderRadius: 50,
  },
});

export default Profile;
