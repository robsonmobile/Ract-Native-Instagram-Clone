import React from "react";
import { Image, StyleSheet, Dimensions, View } from "react-native";

const win = Dimensions.get("window");

const GridPostItem = ({ item }) => {
  return (
    <Image
      style={styles.item}
      source={{
        uri: item.photo,
      }}
      resizeMode={"cover"}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: "black",
  },
});

export default GridPostItem;
