import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

type Props = {
  onSkip: () => void;
};

const WelcomeHeader: React.FC<Props> = ({ onSkip }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle} />

      <TouchableOpacity onPress={onSkip}>
        <Text style={styles.skip}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeHeader;

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
  },
  skip: {
    fontSize: 16,
  },
});
