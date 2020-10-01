import React from 'react';
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Feed from '../components/Feed';
import Nav from '../components/Nav';

const Posts = () => {
    return (
        <View>
            <Nav navigation={navigation} title="Posts"/>
            <Feed />
        </View>
    );
};

export default Posts;