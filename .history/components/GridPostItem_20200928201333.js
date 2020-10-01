import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const GridPostItem = ({ post }) => {
  return (
    <View>
      <Image source={{ uri: post.photo }} />
      <Text>ad</Text>
    </View>
  );
};

export default GridPostItem;
