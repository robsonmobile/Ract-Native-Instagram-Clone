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
  },
  content: {
    width: 65,
    height: 65,
    borderWidth: 1,
    borderRadius: 50,
  },
});

export default Story;
