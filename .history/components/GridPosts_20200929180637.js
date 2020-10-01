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
      "https://images.pexels.com/photos/4049672/pexels-photo-4049672.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 3,
    photo:
      "https://images.pexels.com/photos/4132317/pexels-photo-4132317.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 4,
    photo:
      "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 5,
    photo:
      "https://images.pexels.com/photos/3680316/pexels-photo-3680316.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 6,
    photo:
      "https://images.pexels.com/photos/4177563/pexels-photo-4177563.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 7,
    photo:
      "https://images.pexels.com/photos/3867213/pexels-photo-3867213.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 8,
    photo:
      "https://images.pexels.com/photos/3270230/pexels-photo-3270230.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 9,
    photo:
      "https://images.pexels.com/photos/2774197/pexels-photo-2774197.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 10,
    photo:
      "https://images.pexels.com/photos/4226462/pexels-photo-4226462.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 11,
    photo:
      "https://images.pexels.com/photos/3680309/pexels-photo-3680309.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 12,
    photo:
      "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 13,
    photo:
      "https://images.pexels.com/photos/3047316/pexels-photo-3047316.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 14,
    photo:
      "https://images.pexels.com/photos/3225889/pexels-photo-3225889.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 15,
    photo:
      "https://images.pexels.com/photos/3828240/pexels-photo-3828240.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 16,
    photo:
      "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 17,
    photo:
      "https://images.pexels.com/photos/3404200/pexels-photo-3404200.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 18,
    photo:
      "https://images.pexels.com/photos/1771383/pexels-photo-1771383.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
];

const GridPosts = ({navigation}) => {
  console.log(gridPostArray.findIndex(item => item.id === 18))
  return (
    <View style={styles.gripdPosts}>
      <View style={styles.gripdPostsType}>
        <Ionicons name="md-grid" size={24} color="black" />
        <Feather name="user" size={24} color="black" />
      </View>
      <View>
        <FlatList
          nestedScrollEnabled
          data={gridPostArray}
          keyExtractor={(item) => item.id}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <GridPostItem item={item} navigation={navigation} index={gridPostArray.indexOf(item)}/>}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gripdPosts: {
    marginTop: 20,
    flex: 1,
  },
  gripdPostsType: {
    flexDirection: "row",
    marginBottom: 1,
    justifyContent: "space-around",
    marginBottom: 10,
  },
});

export default GridPosts;
