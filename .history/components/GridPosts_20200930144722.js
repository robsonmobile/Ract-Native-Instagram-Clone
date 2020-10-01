import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import GridPostItem from "./GridPostItem";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const GridPosts = ({ posts, navigation }) => {
  return (
    <View style={styles.gripdPosts}>
      <View style={styles.gripdPostsType}>
        <Ionicons name="md-grid" size={24} color="black" />
        <Feather name="user" size={24} color="black" />
      </View>
      <View>
        <FlatList
          nestedScrollEnabled
          data={posts}
          keyExtractor={(item) => item.id}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Posts", {
                  posts,
                  index: posts.findIndex((i) => i.id === item.id),
                })
              }
            >
              <GridPostItem item={item} navigation={navigation} />
            </TouchableOpacity>
          )}
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
