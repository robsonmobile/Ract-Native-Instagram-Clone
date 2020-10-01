import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Nav from "../components/Nav";

const Profile = ({ navigation }) => {
  return (
    <View>
      <Nav navigation={navigation} title="safak" />
      <View style={styles.profileUser}>
        <Image
          source={{
            uri:
              "https://images.pexels.com/photos/3913498/pexels-photo-3913498.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          }}
        />
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
    height: 150,
    width: 150,
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
