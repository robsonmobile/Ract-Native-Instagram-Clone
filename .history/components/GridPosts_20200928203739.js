import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import GridPostItem from "./GridPostItem";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const gridPostArray = [
  {
    id: 1,
    photo:
      "https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 2,
    photo:
      "https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 3,
    photo:
      "https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 4,
    photo:
      "https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 5,
    photo:
      "https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 6,
    photo:
      "https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 7,
    photo:
      "https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 8,
    photo:
      "https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 9,
    photo:
      "https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 10,
    photo:
      "https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 11,
    photo:
      "https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 12,
    photo:
      "https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
];

const GridPosts = () => {
  return (
    <View style={styles.gripdPosts}>
      <View style={styles.gripdPostsType}>
        <Ionicons
          name="md-grid"
          size={24}
          color="black"
          style={{
            borderBottomWidth: 2,
            width: "50%",
            borderBottomColor: "red",
          }}
        />
        <Feather name="user" size={24} color="black" />
      </View>
      <FlatList
        data={gridPostArray}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => <GridPostItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  gripdPosts: {
    marginTop: 10,
},
gripdPostsType: {
    flexDirection: "row",
    marginBottom:1
  },
});

export default GridPosts;
