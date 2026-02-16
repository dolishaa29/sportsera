import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
  ImageBackground,
  StatusBar,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigationTypes";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "RoleSelection"
>;

const RoleSelection: React.FC<Props> = ({ navigation }) => {
  const scheme = useColorScheme();
  const isDark = scheme === "dark";

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1517649763962-0c623066013b", // stadium background
      }}
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />

      {/* Overlay */}
      <View
        style={[
          styles.overlay,
          { backgroundColor: isDark ? "rgba(0,0,0,0.85)" : "rgba(0,0,0,0.65)" },
        ]}
      >
        <View style={styles.container}>
          <Text style={styles.title}>
            Choose Your Role
          </Text>

          <Text style={styles.subtitle}>
            Are you here to play or to lead?
          </Text>

          <TouchableOpacity
            style={styles.primaryButton}
            activeOpacity={0.85}
            onPress={() =>
              navigation.navigate("PlayerRegister")
            }
          >
            <Text style={styles.primaryButtonText}>
              I am a Player
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            activeOpacity={0.85}
            onPress={() =>
              navigation.navigate("LeaderRegister")
            }
          >
            <Text style={styles.secondaryButtonText}>
              I am a Leader
            </Text>
          </TouchableOpacity>

          <Text style={styles.quote}>
            "Teams win games. Leaders build legacies."
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default RoleSelection;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 34,
    fontWeight: "900",
    color: "#ffffff",
    textAlign: "center",
    letterSpacing: 1.5,
    marginBottom: 12,
    textTransform: "uppercase",
  },
  subtitle: {
    fontSize: 17,
    textAlign: "center",
    color: "#dddddd",
    marginBottom: 50,
  },
  primaryButton: {
    backgroundColor: "#ffffff",
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 20,
    elevation: 8,
  },
  primaryButtonText: {
    fontSize: 17,
    fontWeight: "700",
    color: "#000000",
    letterSpacing: 1,
  },
  secondaryButton: {
    borderWidth: 2,
    borderColor: "#ffffff",
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
  },
  secondaryButtonText: {
    fontSize: 17,
    fontWeight: "700",
    color: "#ffffff",
    letterSpacing: 1,
  },
  quote: {
    marginTop: 60,
    textAlign: "center",
    fontSize: 14,
    color: "#cccccc",
    fontStyle: "italic",
    paddingHorizontal: 20,
  },
});
