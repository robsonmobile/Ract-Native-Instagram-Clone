import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const Story = ({ id, content, user }) => {
  return (
    <View style={styles.story}>
      <Text>{user.username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
      width:30,
      height:30,
      margin:10,
      borderWidth:1,
      borderRadius:50
  },
});

export default Story;
