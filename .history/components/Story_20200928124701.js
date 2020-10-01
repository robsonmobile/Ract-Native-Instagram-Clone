import React from "react";
import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableOpacityBase, View } from "react-native";

const Story = ({ id, content, user }) => {
  return (
    <View style={styles.story}>
      <TouchableOpacity>
        <Image
          style={styles.content}
          source={{
            uri: user.profilePicture,
          }}
        />
      </TouchableOpacity>
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
    borderWidth: 2,
    borderColor: "coral",
    borderRadius: 50,
  },
});

export default Story;
