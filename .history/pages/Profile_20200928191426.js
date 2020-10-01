import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Nav from "../components/Nav";

const Profile = ({ navigation }) => {
  return (
    <View>
        <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006_edit_1.jpg'}} style={{ resizeMode: 'cover', width: '100%', height: '100%' }}/>

    </View>
  );
};

const styles = StyleSheet.create({
  profileUser: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePicture: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  profileCounters: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  profileCounterItem: {
    alignItems: "center",
  },
});

export default Profile;
