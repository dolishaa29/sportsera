import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParamList } from "./navigationTypes";

import OnBoardingScreens from "./Screens/OnBoardingScreens";
import RoleSelection from "./Screens/RoleSelection";
import PlayerRegister from "./Screens/PlayerRegister";
import LeaderRegister from "./Screens/LeaderRegister";
import ExpertiseScreen from "./Screens/ExpertiseScreen";

const Stack =
  createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Onboarding"
          component={OnBoardingScreens}
        />
        <Stack.Screen
          name="RoleSelection"
          component={RoleSelection}
        />
        <Stack.Screen
          name="PlayerRegister"
          component={PlayerRegister}
        />
        <Stack.Screen
          name="LeaderRegister"
          component={LeaderRegister}
        />
        <Stack.Screen
          name="ExpertiseScreen"
          component={ExpertiseScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
