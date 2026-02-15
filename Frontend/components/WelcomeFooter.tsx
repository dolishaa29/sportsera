import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

type Props = {
  currentIndex: number;
  totalScreens: number;
  onGetStarted: () => void;
};

const WelcomeFooter: React.FC<Props> = ({
  currentIndex,
  totalScreens,
  onGetStarted,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.dotsContainer}>
        {Array.from({ length: totalScreens }).map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index && styles.activeDot,
            ]}
          />
        ))}
      </View>

      {currentIndex === totalScreens - 1 && (
        <TouchableOpacity
          style={styles.button}
          onPress={onGetStarted}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default WelcomeFooter;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    alignItems: "center",
  },
  dotsContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#000",
  },
  button: {
    backgroundColor: "#000",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
