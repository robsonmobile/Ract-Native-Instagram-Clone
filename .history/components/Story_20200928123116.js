import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Story = ({ id, content, user }) => {
  return (
    <View style={styles.story}>
      <Image
        style={styles.content}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    margin: 10,
  },
  content: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 50,
  },
});

export default Story;
