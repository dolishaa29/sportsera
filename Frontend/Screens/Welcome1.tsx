import React from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";



export default function Welcome1() {
  const scheme = useColorScheme();
  const isDark = scheme === "dark";
 

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.text,
          { color: isDark ? "#fff" : "#000" },
        ]}
      >
        Welcome Screen 1
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
  text: {
    fontSize: 24,
  },
});
