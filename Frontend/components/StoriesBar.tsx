import React from "react";
import { ScrollView, Image, StyleSheet } from "react-native";

const StoriesBar = ({ data }: any) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {data.map((item: any) => (
        <Image
          key={item.id}
          source={{ uri: item.image }}
          style={styles.story}
        />
      ))}
    </ScrollView>
  );
};

export default StoriesBar;

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 35,
    margin: 10,
    borderWidth: 2,
    borderColor: "#1DB954",
  },
});
