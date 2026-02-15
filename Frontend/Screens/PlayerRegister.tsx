import React, { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigationTypes";
import { ExpertiseType } from "../types";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "PlayerRegister"
>;

const PlayerRegister: React.FC<Props> = ({
  navigation,
  route,
}) => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    address: "",
    contact: "",
    city: "",
    interests: "",
    image: "",
  });

  const [expertiseList, setExpertiseList] =
    useState<ExpertiseType[]>([]);

  // Receive expertise when coming back
  useEffect(() => {
    if (route.params?.expertise) {
      setExpertiseList(route.params.expertise);
    }
  }, [route.params]);

  const handleSubmit = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Email and Password are required");
      return;
    }

    const playerData = {
      ...form,
      contact: Number(form.contact),
      expertise: expertiseList,
    };

    try {
      const response = await fetch(
        "http://10.0.2.2:8051/api/player/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(playerData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Success", data.message || "Player Registered");
      } else {
        Alert.alert("Error", data.message || "Registration Failed");
      }
    } catch {
      Alert.alert("Error", "Server Error");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Player Registration</Text>

      {Object.keys(form).map((key) => (
        <TextInput
          key={key}
          style={styles.input}
          placeholder={key}
          secureTextEntry={key === "password"}
          keyboardType={key === "contact" ? "numeric" : "default"}
          onChangeText={(text) =>
            setForm({ ...form, [key]: text })
          }
        />
      ))}

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("ExpertiseScreen", {
            from: "PlayerRegister",
          })
        }
      >
        <Text style={styles.buttonText}>
          Add Expertise ({expertiseList.length})
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.submitBtn}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PlayerRegister;

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
  },
  button: {
    backgroundColor: "black",
    padding: 15,
    alignItems: "center",
    borderRadius: 8,
    marginTop: 10,
  },
  submitBtn: {
    backgroundColor: "green",
    padding: 15,
    alignItems: "center",
    borderRadius: 8,
    marginTop: 15,
  },
  buttonText: { color: "white" },
});
