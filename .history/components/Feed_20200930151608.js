import React, { useEffect, useRef } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import Post from "./Post";

const Feed = ({ posts, index, navigation }) => {
  const flatListRef = useRef();
  console.log(navigation)

  getItemLayout = (data, index) => ({
    length: 600,
    offset: 600 * index,
    index,
  });

  useEffect(() => {
    setTimeout(() => {
      index > 0 &&
        flatListRef.current.scrollToIndex({ index: index, animated: false });
    });
  }, []);

  return (
    <>
      <FlatList
        data={posts}
        style={styles.feed}
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        renderItem={({ item }) => <Post item={item} navigation={navigation}/>}
        getItemLayout={(data, index) => getItemLayout(data, index)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  feed: {},
});

export default Feed;
