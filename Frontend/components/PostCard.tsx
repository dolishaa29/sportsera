import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const PostCard = ({ post }: any) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image
          source={{ uri: post.userImage }}
          style={styles.profile}
        />
        <Text style={{ marginLeft: 10 }}>{post.user}</Text>
      </View>

      <Image
        source={{ uri: post.postImage }}
        style={styles.postImage}
      />

      <Text style={{ marginTop: 5 }}>{post.caption}</Text>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  card: {
    margin: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  profile: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  postImage: {
    height: 200,
    borderRadius: 10,
  },
});
