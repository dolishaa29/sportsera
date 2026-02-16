import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.pravatar.cc/150?img=5" }}
        style={styles.profile}
      />

      <Text style={styles.address}>
        Pune, Maharashtra 📍
      </Text>

      <View style={styles.icons}>
        <Text style={{ fontSize: 18 }}>🔍</Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 20, marginLeft: 15 }}>☰</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  address: {
    fontWeight: "600",
  },
  icons: {
    flexDirection: "row",
  },
});
