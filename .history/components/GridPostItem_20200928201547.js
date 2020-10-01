import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const GridPostItem = ({ item }) => {
  return (
    <View>
      <Image source={{ uri: item.photo }} style={StyleSheet.item}/>
    </View>
  );
};

const styles = StyleSheet.create({
    item:{
        width:50,
        height:50
    }
})

export default GridPostItem;
