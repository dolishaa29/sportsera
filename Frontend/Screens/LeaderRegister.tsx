import React, { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigationTypes";
import { ExpertiseType } from "../types";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "LeaderRegister"
>;

const LeaderRegister: React.FC<Props> = ({
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

  useEffect(() => {
    if (route.params?.expertise) {
      setExpertiseList(route.params.expertise);
    }
  }, [route.params]);

  const selectImage = () => {
    launchImageLibrary(
      { mediaType: "photo" },
      (response) => {
        if (response.assets && response.assets.length > 0) {
          const uri = response.assets[0].uri || "";
          setForm({ ...form, image: uri });
        }
      }
    );
  };

  const handleSubmit = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Email and Password are required");
      return;
    }

    const leaderData = {
      ...form,
      contact: Number(form.contact),
      expertise: expertiseList,
    };

    try {
      const response = await fetch(
        "http://10.0.2.2:8051/api/leader/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leaderData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Success", data.message || "Leader Registered");
      } else {
        Alert.alert("Error", data.message || "Registration Failed");
      }
    } catch {
      Alert.alert("Error", "Server Error");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Leader Registration</Text>

      <TouchableOpacity
        style={styles.imageContainer}
        onPress={selectImage}
      >
        {form.image ? (
          <Image
            source={{ uri: form.image }}
            style={styles.image}
          />
        ) : (
          <Text style={styles.imageText}>
            Tap to Select Image
          </Text>
        )}
      </TouchableOpacity>

      {Object.keys(form)
        .filter((key) => key !== "image")
        .map((key) => (
          <TextInput
            key={key}
            style={styles.input}
            placeholder={key}
            secureTextEntry={key === "password"}
            keyboardType={
              key === "contact" ? "numeric" : "default"
            }
            onChangeText={(text) =>
              setForm({ ...form, [key]: text })
            }
          />
        ))}

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("ExpertiseScreen", {
            from: "LeaderRegister",
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

export default LeaderRegister;

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  imageContainer: {
    height: 120,
    width: 120,
    borderRadius: 60,
    backgroundColor: "#ddd",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  imageText: {
    fontSize: 12,
    textAlign: "center",
  },
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
