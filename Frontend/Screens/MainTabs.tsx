import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import HomeScreen from "./HomeScreen";

const Tab = createBottomTabNavigator();

const MatchesScreen = () => <Text>Matches</Text>;
const MessagesScreen = () => <Text>Messages</Text>;
const ProfileScreen = () => <Text>Profile</Text>;

export default function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Matches" component={MatchesScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
