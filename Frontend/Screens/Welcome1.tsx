import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
} from "react-native";

export default function Welcome1() {
  const scheme = useColorScheme();
  const isDark = scheme === "dark";

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? "#000" : "#fff" },
      ]}
    >
      <Text
        style={[
          styles.title,
          { color: isDark ? "#fff" : "#000" },
        ]}
      >
        Sportsera
      </Text>

      <Text
        style={[
          styles.subtitle,
          { color: isDark ? "#ccc" : "#555" },
        ]}
      >
        Discover. Connect. Compete.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 16,
    marginTop: 15,
    textAlign: "center",
    paddingHorizontal: 40,
  },
});
