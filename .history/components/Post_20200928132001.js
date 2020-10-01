import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Post = ({ item }) => {
  return (
    <View style={styles.post}>
      <View style={styles.user}>
        <View style={styles.userInfo}>
          <Image
            style={styles.profilePicture}
            source={{
              uri: item.user.profilePicture,
            }}
          />
          <Text>{item.user.username}</Text>
        </View>
        <MaterialIcons name="more-vert" size={24} color="black" />
      </View>
      <View style={styles.content}>
        <Image
          style={styles.content}
          source={{
            uri: item.content,
          }}
        />
      </View>
      <View style={styles.icons}></View>
      <View style={styles.info}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    marginBottom: 15,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profilePicture: {
    height: 30,
    width: 30,
    borderRadius: 50,
    marginRight: 10,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  content:{
      height:"auto"
  }
});

export default Post;
