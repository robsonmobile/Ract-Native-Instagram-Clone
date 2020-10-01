import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Story = ({ id, content, user }) => {
  return (
    <View style={styles.story}>
      <Image
        style={styles.content}
        source={{
          uri: content,
        }}
      />
      <Text>{user.username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    margin: 10,
    alignItems: "center",
  },
  content: {
    width: 65,
    height: 65,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderRightColor: "red",
    borderLeftColor:"yellow",
    borderRadius: 50,
  },
});

export default Story;
