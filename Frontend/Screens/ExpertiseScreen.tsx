import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
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
    <View style={styles.container}>
      <Text style={styles.title}>Add Expertise</Text>

      <TextInput
        style={styles.input}
        placeholder="Expertise Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={addExpertise}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <FlatList
        data={expertiseList}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.name} - {item.description}
          </Text>
        )}
      />

      <TouchableOpacity
        style={styles.saveBtn}
        onPress={saveAndGoBack}
      >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExpertiseScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 20 },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  button: {
    backgroundColor: "black",
    padding: 12,
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 15,
  },
  saveBtn: {
    backgroundColor: "green",
    padding: 12,
    alignItems: "center",
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: { color: "white" },
  item: { marginVertical: 5 },
});
