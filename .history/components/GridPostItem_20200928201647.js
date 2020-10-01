import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const GridPostItem = ({ item }) => {
  return (
    <View>
      <Image
          style={styles.item}
          source={{
            uri:item.photo
          }}
          resizeMode={"cover"}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    item:{
        width:100,
        height:100
    }
})

export default GridPostItem;
