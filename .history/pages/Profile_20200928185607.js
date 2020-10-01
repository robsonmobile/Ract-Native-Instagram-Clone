import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Nav from "../components/Nav";

const Profile = ({ navigation }) => {
  return (
    <View>
      <Nav navigation={navigation} title="safak" />
      <View style={styles.profileUser}>
        <Text>anan</Text>
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
  profilePicture: {
    height: 150,
    width: 150,
    borderRadius: 50,
  },
  profileCounters: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  profileCounterItem:{
      alignItems:"center"
  }
});

export default Profile;
