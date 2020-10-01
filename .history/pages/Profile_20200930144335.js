import React from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import Nav from "../components/Nav";
import { AntDesign } from "@expo/vector-icons";
import GridPosts from "../components/GridPosts";
import { currentUserPostArray } from "../dummyData";
import { otherUserPostArray } from "../dummyData";


const Profile = ({ route, navigation }) => {
  const { username } = route?.params;


  console.log(username)
  return (
    <View style={styles.profile}>
      <Nav navigation={navigation} title="kk" />
      <ScrollView>
        <View style={styles.profileUser}>
          <Image
            style={styles.profilePicture}
            source={{
              uri:
                "https://images.pexels.com/photos/3913498/pexels-photo-3913498.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            }}
            resizeMode={"cover"}
          />
          <View style={styles.profileCounters}>
            <View style={styles.profileCounterItem}>
              <Text style={styles.profileCounterItemNumber}>124</Text>
              <Text>Posts</Text>
            </View>
            <View style={styles.profileCounterItem}>
              <Text style={styles.profileCounterItemNumber}>763</Text>
              <Text>Followers</Text>
            </View>
            <View style={styles.profileCounterItem}>
              <Text style={styles.profileCounterItemNumber}>847</Text>
              <Text>Followings</Text>
            </View>
          </View>
        </View>
        <View style={styles.profileUserDesc}>
          <Text style={styles.profileUserDescName}>Safak Kocaoglu</Text>
          <Text style={styles.profileUserDescText}>
            Oh man, I shot Marvin in the face
          </Text>
        </View>
        <View style={styles.followInfo}>
          <View style={styles.followInfoFollow}>
            <Text style={styles.followInfoFollowText}>Follow</Text>
          </View>
          <View style={styles.followInfoMessage}>
            <Text style={styles.followInfoMessageText}>Message</Text>
          </View>
          <View style={styles.followInfoSmall}>
            <AntDesign name="down" size={14} color="black" />
          </View>
        </View>
        <GridPosts navigation={navigation} posts={currentUserPostArray} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    flex: 1,
  },
  profileUser: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  profilePicture: {
    height: 75,
    width: 75,
    borderRadius: 50,
  },
  profileCounters: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  profileCounterItem: {
    marginRight: 20,
    alignItems: "center",
  },
  profileCounterItemNumber: {
    fontWeight: "bold",
    fontSize: 18,
  },
  profileUserDesc: {
    marginTop: 5,
    marginLeft: 15,
  },
  profileUserDescName: {
    fontWeight: "bold",
  },
  followInfo: {
    marginTop: 15,
    marginLeft: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  followInfoFollow: {
    flex: 0.4,
    height: 35,
    backgroundColor: "#1a95e2",
    padding: 5,
    alignItems: "center",
    borderRadius: 5,
    justifyContent: "center",
  },
  followInfoMessage: {
    flex: 0.4,
    height: 35,
    padding: 5,
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: "center",
  },
  followInfoSmall: {
    flex: 0.1,
    height: 35,
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    marginRight: 15,
    justifyContent: "center",
  },
  followInfoFollowText: {
    fontWeight: "bold",
    color: "#f9f9f9",
  },
  followInfoMessageText: {
    fontWeight: "bold",
  },
});

export default Profile;
