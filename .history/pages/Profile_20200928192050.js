import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Nav from "../components/Nav";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.profile}>
      <Nav navigation={navigation} title="safak" />
      <View style={styles.profileUser}>
        <Image
          style={styles.profilePicture}
          source={{
            uri:
              "https://images.pexels.com/photos/3913498/pexels-photo-3913498.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          }}
          resizeMode={"cover"}
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
  profile: {},
  profileUser: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between"
  },
  profilePicture: {
    height: 75,
    width: 75,
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
