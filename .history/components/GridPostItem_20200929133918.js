import React from "react";
import { Image, StyleSheet, Dimensions, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const win = Dimensions.get("window");

const GridPostItem = ({ item,navigation }) => {
  return (
    <TouchableOpacity onPress={navitagation.goBack()}}>
      <Image
        on
        style={styles.item}
        source={{
          uri: item.photo,
        }}
        resizeMode={"cover"}
      />
    </TouchableOpacity>
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
