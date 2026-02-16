import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from "react-native";

export default function Welcome1() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.brandWrapper}>
        <View style={styles.brandLine} />
        <Text style={styles.title}>
          Sportsera
        </Text>
      </View>

      <Text style={styles.subtitle}>
        Discover. Connect. Compete.
      </Text>

      <Text style={styles.quote}>
        "Champions are built when passion meets opportunity."
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0B0F", // deep premium dark
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },

  brandWrapper: {
    alignItems: "center",
  },

  brandLine: {
    width: 40,
    height: 4,
    backgroundColor: "#1DB954",
    borderRadius: 2,
    marginBottom: 18,
  },

  title: {
    fontSize: 34,
    fontWeight: "800",
    letterSpacing: 1.4,
    color: "#FFFFFF",
  },

  subtitle: {
    fontSize: 16,
    marginTop: 22,
    textAlign: "center",
    color: "#D0D0D0",
    fontWeight: "500",
    letterSpacing: 0.8,
  },

  quote: {
    fontSize: 14,
    marginTop: 36,
    textAlign: "center",
    color: "#8E8E93",
    fontStyle: "italic",
    lineHeight: 22,
  },
});
