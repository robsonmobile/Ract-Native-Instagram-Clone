import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
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
      desc: " hello my friends. Its a rainy day!",
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
];

const Feed = () => {
  return (
    <FlatList
      style={styles.feed}
      data={postArray}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <Post item={item} />}
    />
  );
};

const styles = StyleSheet.create({
  feed: {},
});

export default Feed;
