import React, { useEffect, useRef } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import Post from "./Post";

const postArray = [
  {
    id: 1,
    user: {
      username: "John",
      profilePicture:
        "https://images.pexels.com/photos/3059745/pexels-photo-3059745.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    content: {
      image:
        "https://wplook.com/wp-content/uploads/2018/03/instagram-photo-size-square-1080.jpg",
      desc: "good morning",
      date: Date.now(),
    },
    likes: 123,
    comments: [
      {
        id: 1,
        user: {
          username: "Anna",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Nice pic bro :)",
        parent: null,
      },
      {
        id: 2,
        user: {
          username: "John",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Cool",
        parent: null,
      },
      {
        id: 3,
        user: {
          username: "Alex",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "No its not!",
        parent: 2,
      },
    ],
  },
  {
    id: 2,
    user: {
      username: "Garry",
      profilePicture:
        "https://images.pexels.com/photos/3059745/pexels-photo-3059745.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    content: {
      image:
        "https://images.pexels.com/photos/4132436/pexels-photo-4132436.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      desc: "hello my friends. Its a rainy day!",
      date: Date.now(),
    },
    likes: 13,
    comments: [
      {
        id: 4,
        user: {
          username: "Anna",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Nice pic bro :)",
        parent: null,
      },
      {
        id: 5,
        user: {
          username: "John",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Cool",
        parent: null,
      },
      {
        id: 6,
        user: {
          username: "Alex",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "No its not!",
        parent: 2,
      },
    ],
  },
  {
    id: 3,
    user: {
      username: "Ross",
      profilePicture:
        "https://images.pexels.com/photos/3059745/pexels-photo-3059745.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    content: {
      image:
        "https://images.pexels.com/photos/3961581/pexels-photo-3961581.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      desc: "Such a beautiful view...",
      date: Date.now(),
    },
    likes: 23,
    comments: [
      {
        id: 7,
        user: {
          username: "Anna",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Nice pic bro :)",
        parent: null,
      },
      {
        id: 8,
        user: {
          username: "John",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Cool",
        parent: null,
      },
      {
        id: 9,
        user: {
          username: "Alex",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "No its not!",
        parent: 2,
      },
    ],
  },
  {
    id: 4,
    user: {
      username: "Ben",
      profilePicture:
        "https://images.pexels.com/photos/3059745/pexels-photo-3059745.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    content: {
      image:
        "https://images.pexels.com/photos/4132436/pexels-photo-4132436.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      desc: "Hi!",
      date: Date.now(),
    },
    likes: 61,
    comments: [
      {
        id: 10,
        user: {
          username: "Anna",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Nice pic bro :)",
        parent: null,
      },
      {
        id: 11,
        user: {
          username: "John",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Cool",
        parent: null,
      },
      {
        id: 12,
        user: {
          username: "Alex",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "No its not!",
        parent: 2,
      },
    ],
  },
  {
    id: 5,
    user: {
      username: "John",
      profilePicture:
        "https://images.pexels.com/photos/3059745/pexels-photo-3059745.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    content: {
      image:
        "https://images.pexels.com/photos/3961581/pexels-photo-3961581.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      desc: "what a wonderful world...",
      date: Date.now(),
    },
    likes: 17,
    comments: [
      {
        id: 13,
        user: {
          username: "Anna",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Nice pic bro :)",
        parent: null,
      },
      {
        id: 14,
        user: {
          username: "John",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Cool",
        parent: null,
      },
      {
        id: 15,
        user: {
          username: "Alex",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "No its not!",
        parent: 2,
      },
    ],
  },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
  { id: 13 },
  { id: 14 },
  { id: 15 },
  { id: 16 },
  { id: 17 },
  { id: 18 },
  { id: 19 },
  { id: 20 },
  { id: 21 },
  { id: 22 },
  { id: 23 },
  { id: 24 },
  { id: 25 },
  { id: 26 },
  { id: 27 },
  { id: 28 },
  { id: 29 },
  { id: 30 },
  { id: 31 },
  { id: 32 },
  { id: 33 },
  { id: 34 },
  { id: 35 },
  { id: 36 },
  { id: 37 },
  { id: 38 },
  { id: 39 },
  { id: 40 },
];

const Feed = ({ postId }) => {
  const flatListRef = useRef();

  getItemLayout = (data, index) => ({
    length: 10,
    offset: 10 * index,
    index,
  });

  // useEffect(() => {
  //   setTimeout(() => {
  //     flatListRef.current.scrollToIndex({ index: 3 });
  //   });
  // }, []);

  return (
    <>
      <FlatList
        style={styles.feed}
        ref={flatListRef}
        data={postArray}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        horizontal
        renderItem={({ item }) => <Text>{item.id}</Text>}
        getItemLayout={(data, index) => getItemLayout(data, index)}
        scrollToIndex={{params:{index:3}}}
      />
      <TouchableHighlight
        onPress={() =>
          flatListRef.current.scrollToIndex({ index: 4, animated: true })
        }
      >
        <Text> ScrollToIndex </Text>
      </TouchableHighlight>
    </>
  );
};

const styles = StyleSheet.create({
  feed: {},
});

export default Feed;
