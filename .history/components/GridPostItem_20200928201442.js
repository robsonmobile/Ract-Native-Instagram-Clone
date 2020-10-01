import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const GridPostItem = ({ item }) => {
  return (
    <View>
      <Image source={{ uri: item.photo }} />
      <Text>{item.id}</Text>
    </View>
  );
};

export default GridPostItem;
