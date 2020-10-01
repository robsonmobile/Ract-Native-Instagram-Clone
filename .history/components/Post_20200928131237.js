import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
      </View>
      <View style={styles.content}></View>
      <View style={styles.icons}></View>
      <View style={styles.info}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {},
  profilePicture: {
    height: 40,
    width: 40,
  },
});

export default Post;
