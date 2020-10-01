import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Nav from "../components/Nav";

const Profile = ({ navigation }) => {
  return (
    <View>
      <Nav navigation={navigation} title="safak" />
      <View style={styles.profileUser}>
      <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006_edit_1.jpg'}} style={{ resizeMode: 'cover', width: '100%', height: '100%' }}/>

        <View style={styles.profileCounters}>
          <View style={styles.profileCounterItem}>
            <Text>124</Text>
            <Text>Posts</Text>
          </View>
          <View style={styles.profileCounterItem}>
            <Text>763</Text>
            <Text>Followers</Text>
          </View>
          <View style={styles.profileCounterItem}>
            <Text>847</Text>
            <Text>Followings</Text>
          </View>
        </View>
      </View>
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
