import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "RoleSelection"
>;

const RoleSelection: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Are you a Player or Leader?
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("PlayerRegister")
        }
      >
        <Text style={styles.buttonText}>Player</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("LeaderRegister")
        }
      >
        <Text style={styles.buttonText}>Leader</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RoleSelection;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 40 },
  button: {
    backgroundColor: "black",
    padding: 15,
    width: "80%",
    marginBottom: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "white", fontSize: 16 },
});
