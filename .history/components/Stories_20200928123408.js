import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Story from "./Story";

const storyArray = [
  {
    id: 1,
    content:
      "https://images.pexels.com/photos/789296/pexels-photo-789296.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    user: {
      username: "Helena",
      profilePicture:
        "https://images.pexels.com/photos/2049905/pexels-photo-2049905.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  },
  {
    id: 2,
    content:
      "https://images.pexels.com/photos/789296/pexels-photo-789296.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    user: {
      username: "Adam",
      profilePicture:
        "https://images.pexels.com/photos/2049905/pexels-photo-2049905.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  },
  {
    id: 3,
    content:
      "https://images.pexels.com/photos/789296/pexels-photo-789296.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    user: {
      username: "Anna",
      profilePicture:
        "https://images.pexels.com/photos/2049905/pexels-photo-2049905.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  },
  {
    id: 4,
    content:
      "https://images.pexels.com/photos/789296/pexels-photo-789296.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    user: {
      username: "John",
      profilePicture:
        "https://images.pexels.com/photos/2049905/pexels-photo-2049905.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  },
  {
    id: 5,
    content:
      "https://images.pexels.com/photos/789296/pexels-photo-789296.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    user: {
      username: "Alex",
      profilePicture:
        "https://images.pexels.com/photos/2049905/pexels-photo-2049905.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  },
  {
    id: 6,
    content:
      "https://images.pexels.com/photos/789296/pexels-photo-789296.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    user: {
      username: "Jane",
      profilePicture:
        "https://images.pexels.com/photos/2049905/pexels-photo-2049905.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  },
  {
    id: 7,
    content:
      "https://images.pexels.com/photos/789296/pexels-photo-789296.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    user: {
      username: "Mike",
      profilePicture:
        "https://images.pexels.com/photos/2049905/pexels-photo-2049905.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  },
  {
    id: 8,
    content:
      "https://images.pexels.com/photos/789296/pexels-photo-789296.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    user: {
      username: "Phebe",
      profilePicture:
        "https://images.pexels.com/photos/2049905/pexels-photo-2049905.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  },
];

const Stories = () => {
  return (
    <View style={styles.stories}>
      <View style={styles.top}>
        <Text>Stories</Text>
        <View style={styles.topRight}>
          <FontAwesome
            name="play"
            size={14}
            style={styles.icon}
            color="black"
          />
          <Text>Watch All</Text>
        </View>
      </View>
      <View>
        <FlatList
          data={storyArray}
          horizontal
          renderItem={({ item }) => (
            <Story id={item.id} content={item.content} user={item.user} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stories: {
    height: 135,
    backgroundColor: "#f9f9f9",
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  top: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
  },
});

export default Stories;
