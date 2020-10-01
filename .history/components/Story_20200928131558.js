import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
    marginRight: 10,
    marginTop: 10,
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
