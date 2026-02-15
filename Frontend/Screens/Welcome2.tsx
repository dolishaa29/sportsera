import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
} from "react-native";

export default function Welcome2() {
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
        Find Your Team
      </Text>

      <Text
        style={[
          styles.subtitle,
          { color: isDark ? "#ccc" : "#555" },
        ]}
      >
        Join players and leaders who match your skills and interests.
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
