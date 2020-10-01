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
    flex: 1,
    width: win.width / 3,
    height: win.width / 3,
    borderWidth: 1,
    borderColor: "black",
  },
});

export default GridPostItem;
