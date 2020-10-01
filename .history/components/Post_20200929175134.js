import React, { useEffect } from "react";
import { Image, StyleSheet, Text, Dimensions, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { format } from "timeago.js";

const win = Dimensions.get("window");

const Post = ({ item }) => {

  return (
    <View style={styles.post} >
      <View style={styles.user}>
        <View style={styles.userInfo}>
          <Image
            style={styles.profilePicture}
            source={{
              uri: item.user.profilePicture,
            }}
          />
          <Text>{item.user.username}</Text>
        </View>
        <MaterialIcons name="more-vert" size={24} color="black" />
      </View>
      <View style={styles.content}>
        <Image
          style={styles.contentImage}
          source={{
            uri: item.content.image,
          }}
          resizeMode={"contain"}
        />
      </View>
      <View style={styles.icons}>
        <View style={styles.iconsLeft}>
          <AntDesign name="hearto" size={28} style={styles.icon} />
          <FontAwesome name="comment-o" size={28} style={styles.icon} />
          <Feather name="send" size={28} style={styles.icon} />
        </View>
        <View style={styles.iconsRight}>
          <FontAwesome name="bookmark-o" size={28} style={styles.icon} />
        </View>
      </View>
      <View style={styles.info}>
        <Text style={styles.infoLike}>{item.likes} likes</Text>
        <Text style={styles.infoDesc}>{item.content.desc}</Text>
        <Text style={styles.infoComment}>
          View all {item.comments.length} comments
        </Text>
        <Text style={styles.infoDate}>{format(item.content.date)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    flex:1,
    marginTop: 10,
    marginBottom: 10,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 10,
  },
  profilePicture: {
    height: 30,
    width: 30,
    borderRadius: 50,
    marginRight: 10,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  contentImage: {
    marginTop: 10,
    width: win.width,
    aspectRatio: 1,
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconsLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconsRight: {
    marginRight: 10,
  },
  icon: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 5,
    color: "gray",
  },
  info: {
    marginLeft: 10,
    marginTop: 5,
  },
  infoLike: {
    fontSize: 15,
    fontWeight: "bold",
  },
  infoDesc: {
    fontSize: 15,
  },
  infoComment: {
    color: "gray",
  },
  infoDate: {
    color: "gray",
    fontSize: 12,
  },
});

export default Post;
