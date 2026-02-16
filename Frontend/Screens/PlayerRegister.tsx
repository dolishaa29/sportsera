import React, { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  Image,
  View,
  ImageBackground,
  StatusBar,
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
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
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1546519638-68e109498ffc",
      }}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />

      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>
            Player Registration
          </Text>

          {/* Profile Image */}
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={selectImage}
            activeOpacity={0.8}
          >
            {form.image ? (
              <Image
                source={{ uri: form.image }}
                style={styles.image}
              />
            ) : (
              <Text style={styles.imageText}>
                Upload Profile
              </Text>
            )}
          </TouchableOpacity>

          <View style={styles.card}>
            {Object.keys(form)
              .filter((key) => key !== "image")
              .map((key) => (
                <TextInput
                  key={key}
                  style={styles.input}
                  placeholder={key.toUpperCase()}
                  placeholderTextColor="#aaa"
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
              style={styles.expertiseBtn}
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
              <Text style={styles.buttonText}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default PlayerRegister;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.75)",
  },
  container: {
    padding: 25,
  },
  title: {
    fontSize: 30,
    fontWeight: "900",
    color: "#fff",
    textAlign: "center",
    marginBottom: 25,
    letterSpacing: 1,
  },
  imageContainer: {
    height: 130,
    width: 130,
    borderRadius: 65,
    backgroundColor: "#222",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#fff",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  imageText: {
    color: "#aaa",
    fontSize: 13,
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.08)",
    padding: 20,
    borderRadius: 18,
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.1)",
    color: "#fff",
    padding: 14,
    marginBottom: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },
  expertiseBtn: {
    backgroundColor: "#444",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 5,
  },
  submitBtn: {
    backgroundColor: "#1DB954",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
    letterSpacing: 1,
  },
});
