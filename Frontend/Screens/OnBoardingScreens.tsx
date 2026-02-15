import React, { useRef, useState } from "react";
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  ViewToken,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

import Welcome1 from "./Welcome1";
import Welcome2 from "./Welcome2";
import Welcome3 from "./Welcome3";
import WelcomeHeader from "../components/WelcomeHeader";
import WelcomeFooter from "../components/WelcomeFooter";

const { width } = Dimensions.get("window");

type Props = NativeStackScreenProps<
  RootStackParamList,
  "Onboarding"
>;

const OnBoardingScreens: React.FC<Props> = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const screens = [
    { id: "1", component: <Welcome1 /> },
    { id: "2", component: <Welcome2 /> },
    { id: "3", component: <Welcome3 /> },
  ];

  const onViewRef = useRef(
    (info: { viewableItems: ViewToken[] }) => {
      if (info.viewableItems.length > 0) {
        setCurrentIndex(info.viewableItems[0].index ?? 0);
      }
    }
  );

  return (
    <View style={{ flex: 1 }}>
      <WelcomeHeader
        onSkip={() => navigation.navigate("RoleSelection")}
      />

      <FlatList
        data={screens}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ width }}>{item.component}</View>
        )}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
      />

      <WelcomeFooter
        currentIndex={currentIndex}
        totalScreens={screens.length}
        onGetStarted={() =>
          navigation.navigate("RoleSelection")
        }
      />
    </View>
  );
};

export default OnBoardingScreens;
