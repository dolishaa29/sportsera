import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
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
        Choose Your Role
      </Text>

      <Text
        style={[
          styles.subtitle,
          { color: isDark ? "#aaa" : "#555" },
        ]}
      >
        Are you here to play or to lead?
      </Text>

      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: isDark ? "#fff" : "#000",
          },
        ]}
        onPress={() =>
          navigation.navigate("PlayerRegister")
        }
      >
        <Text
          style={[
            styles.buttonText,
            { color: isDark ? "#000" : "#fff" },
          ]}
        >
          I am a Player
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.buttonOutline,
          {
            borderColor: isDark ? "#fff" : "#000",
          },
        ]}
        onPress={() =>
          navigation.navigate("LeaderRegister")
        }
      >
        <Text
          style={[
            styles.buttonOutlineText,
            { color: isDark ? "#fff" : "#000" },
          ]}
        >
          I am a Leader
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RoleSelection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 50,
  },
  button: {
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 20,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },
  buttonOutline: {
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    borderWidth: 2,
  },
  buttonOutlineText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
