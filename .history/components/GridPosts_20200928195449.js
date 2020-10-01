import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import GridPostItem from "./GridPostItem";

const GridPosts = () => {
  return (
    <View style={styles.gripdposts}>
      <GridPostItem />
    </View>
  );
};

const styles = StyleSheet.create({
  gripdposts: {
  },
});

export default GridPosts;
