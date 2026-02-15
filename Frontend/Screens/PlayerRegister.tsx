import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";

const PlayerRegister = () => {
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

  const [expertiseName, setExpertiseName] = useState("");
  const [expertiseDescription, setExpertiseDescription] = useState("");

  const handleSubmit = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Email and Password are required");
      return;
    }

    const playerData = {
      ...form,
      contact: Number(form.contact),
      expertise: [
        {
          name: expertiseName,
          description: expertiseDescription,
        },
      ],
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
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Server Error");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Player Registration</Text>

      <TextInput style={styles.input} placeholder="Email"
        onChangeText={(text) => setForm({ ...form, email: text })} />

      <TextInput style={styles.input} placeholder="Name"
        onChangeText={(text) => setForm({ ...form, name: text })} />

      <TextInput style={styles.input} placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setForm({ ...form, password: text })} />

      <TextInput style={styles.input} placeholder="Address"
        onChangeText={(text) => setForm({ ...form, address: text })} />

      <TextInput style={styles.input} placeholder="Contact"
        keyboardType="numeric"
        onChangeText={(text) => setForm({ ...form, contact: text })} />

      <TextInput style={styles.input} placeholder="City"
        onChangeText={(text) => setForm({ ...form, city: text })} />

      <TextInput style={styles.input} placeholder="Interests"
        onChangeText={(text) => setForm({ ...form, interests: text })} />

      <TextInput style={styles.input} placeholder="Profile Image URL"
        onChangeText={(text) => setForm({ ...form, image: text })} />

      <Text style={styles.subtitle}>Expertise</Text>

      <TextInput style={styles.input} placeholder="Expertise Name"
        onChangeText={setExpertiseName} />

      <TextInput style={styles.input} placeholder="Expertise Description"
        onChangeText={setExpertiseDescription} />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PlayerRegister;

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, marginBottom: 20, fontWeight: "600" },
  subtitle: { fontSize: 18, marginTop: 15, marginBottom: 10 },
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
  buttonText: { color: "white", fontSize: 16 },
});
