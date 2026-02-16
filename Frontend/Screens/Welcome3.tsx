import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  ImageBackground,
  StatusBar,
} from "react-native";

export default function Welcome3() {
  const scheme = useColorScheme();
  const isDark = scheme === "dark";

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2", // athlete background
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
          { backgroundColor: isDark ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.6)" },
        ]}
      >
        <View style={styles.container}>
          <Text style={styles.title}>
            Start Your Journey
          </Text>

          <Text style={styles.subtitle}>
            Whether you’re a player or leader, your journey begins here.
          </Text>

          <Text style={styles.quote}>
            "Every legend was once a beginner who refused to quit."
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
    fontSize: 42,
    fontWeight: "900",
    color: "#ffffff",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 18,
    marginTop: 20,
    textAlign: "center",
    color: "#e0e0e0",
    fontWeight: "500",
    lineHeight: 26,
  },
  quote: {
    fontSize: 16,
    marginTop: 35,
    textAlign: "center",
    color: "#ffffff",
    fontStyle: "italic",
    lineHeight: 24,
    paddingHorizontal: 20,
  },
});
