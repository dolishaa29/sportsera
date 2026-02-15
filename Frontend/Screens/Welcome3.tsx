import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
} from "react-native";

export default function Welcome3() {
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
        Start Your Journey
      </Text>

      <Text
        style={[
          styles.subtitle,
          { color: isDark ? "#ccc" : "#555" },
        ]}
      >
        Whether you’re a player or leader, your journey begins here.
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
    fontSize: 28,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 16,
    marginTop: 15,
    textAlign: "center",
    paddingHorizontal: 40,
  },
});
