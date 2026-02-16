import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  ImageBackground,
  StatusBar,
} from "react-native";

export default function Welcome2() {
  const scheme = useColorScheme();
  const isDark = scheme === "dark";

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1521417531039-7b4c0c1d2f55", // team sports background
      }}
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar
        barStyle={isDark ? "light-content" : "dark-content"}
      />

      {/* Overlay */}
      <View
        style={[
          styles.overlay,
          { backgroundColor: isDark ? "rgba(0,0,0,0.75)" : "rgba(0,0,0,0.6)" },
        ]}
      >
        <View style={styles.container}>
          <Text style={styles.title}>
            Find Your Team
          </Text>

          <Text style={styles.subtitle}>
            Join players and leaders who match your skills and interests.
          </Text>

          <Text style={styles.quote}>
            "Great teams don’t just play together — they rise together."
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    alignItems: "center",
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 40,
    fontWeight: "800",
    color: "#ffffff",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 18,
    marginTop: 18,
    textAlign: "center",
    color: "#e0e0e0",
    fontWeight: "500",
    lineHeight: 24,
  },
  quote: {
    fontSize: 16,
    marginTop: 30,
    textAlign: "center",
    color: "#ffffff",
    fontStyle: "italic",
    lineHeight: 24,
    paddingHorizontal: 20,
  },
});
