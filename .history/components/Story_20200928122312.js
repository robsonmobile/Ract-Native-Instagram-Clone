import React from 'react';
import { FlatList, StyleSheet, Text, View } from "react-native";

const Story = ({id, content, user}) => {
    return (
        <View>
            <Text>{user.username}</Text>
        </View>
    );
};

export default Story;