import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const EventCard = ({ event }: any) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: event.image }} style={styles.image} />
      <Text style={styles.title}>{event.title}</Text>
      <Text>{event.date}</Text>
    </View>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  card: {
    margin: 15,
  },
  image: {
    height: 180,
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    marginTop: 8,
  },
});
