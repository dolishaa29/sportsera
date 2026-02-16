import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ImageBackground,
  StatusBar,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigationTypes";
import { ExpertiseType } from "../types";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "ExpertiseScreen"
>;

const ExpertiseScreen: React.FC<Props> = ({
  navigation,
  route,
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [expertiseList, setExpertiseList] =
    useState<ExpertiseType[]>([]);

  const addExpertise = () => {
    if (!name || !description) return;
    setExpertiseList([
      ...expertiseList,
      { name, description },
    ]);
    setName("");
    setDescription("");
  };

  const saveAndGoBack = () => {
    navigation.navigate(route.params.from, {
      expertise: expertiseList,
    });
  };

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
      }}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />

      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Add Expertise
          </Text>

          <View style={styles.card}>
            <TextInput
              style={styles.input}
              placeholder="EXPERTISE NAME"
              placeholderTextColor="#aaa"
              value={name}
              onChangeText={setName}
            />

            <TextInput
              style={styles.input}
              placeholder="DESCRIPTION"
              placeholderTextColor="#aaa"
              value={description}
              onChangeText={setDescription}
            />

            <TouchableOpacity
              style={styles.addButton}
              onPress={addExpertise}
            >
              <Text style={styles.buttonText}>
                Add Expertise
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={expertiseList}
            keyExtractor={(_, index) => index.toString()}
            style={{ marginTop: 20 }}
            renderItem={({ item }) => (
              <View style={styles.expertiseItem}>
                <Text style={styles.expertiseName}>
                  {item.name}
                </Text>
                <Text style={styles.expertiseDesc}>
                  {item.description}
                </Text>
              </View>
            )}
          />

          <TouchableOpacity
            style={styles.saveBtn}
            onPress={saveAndGoBack}
          >
            <Text style={styles.saveText}>
              Save & Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ExpertiseScreen;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.85)",
  },
  container: {
    flex: 1,
    padding: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    color: "#fff",
    marginBottom: 20,
    letterSpacing: 1,
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.07)",
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
  addButton: {
    backgroundColor: "#444",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    letterSpacing: 1,
  },
  expertiseItem: {
    backgroundColor: "rgba(255,255,255,0.08)",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  expertiseName: {
    color: "#FFD700",
    fontWeight: "800",
    fontSize: 15,
  },
  expertiseDesc: {
    color: "#ddd",
    marginTop: 4,
    fontSize: 13,
  },
  saveBtn: {
    backgroundColor: "#1DB954",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 20,
  },
  saveText: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 15,
    letterSpacing: 1,
  },
});
