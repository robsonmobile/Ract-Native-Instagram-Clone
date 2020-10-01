import React from "react";
import { Image, StyleSheet, Dimensions, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const win = Dimensions.get("window");

const GridPostItem = ({ item, index, navigation }) => {
  return (
      <Image
        style={styles.item}
        source={{
          uri: item.content.image,
        }}
        resizeMode={"cover"}
      />
  );
};

const styles = StyleSheet.create({
  item: {
    width: win.width / 3,
    height: win.width / 3,
    borderWidth: 1,
    borderColor: "black",
  },
});

export default GridPostItem;
