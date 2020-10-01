import React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";

const GridPostItem = ({post}) => {
    return (
        <Image source={{uri:post.photo}}/>
    );
};

export default GridPostItem;