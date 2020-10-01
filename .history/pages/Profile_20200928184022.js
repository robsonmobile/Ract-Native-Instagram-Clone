import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Nav from "../components/Nav";

const Profile = ({ navigation }) => {
  return (
    <View>
      <Nav navigation={navigation} title="safak" />
      <View>
        <Image
          style={styles.profilePicture}
          source={{
            uri:
              "https://images.pexels.com/photos/4673428/pexels-photo-4673428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
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
