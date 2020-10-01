import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Nav from "../components/Nav";

const Profile = ({ navigation }) => {
  return (
    <View>
        <Image
          style={styles.profilePicture}
          source={{
            uri:
              "https://images.pexels.com/photos/3913498/pexels-photo-3913498.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          }}
          resizeMode={"contain"}
        />
      <Nav navigation={navigation} title="safak" />
      <View style={styles.profileUser}>
        <Image
          style={styles.profilePicture}
          source={{
            uri:
              "https://images.pexels.com/photos/3913498/pexels-photo-3913498.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          }}
          resizeMode={"contain"}
        />
        <Text>asd</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});

export default Profile;
