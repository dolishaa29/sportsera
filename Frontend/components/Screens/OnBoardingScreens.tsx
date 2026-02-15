import React, { useRef, useState } from "react";
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  ListRenderItem,
  ViewToken,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Welcome1 from "./Welcome1";
import Welcome2 from "./Welcome2";
import Welcome3 from "./Welcome3";
import WelcomeHeader from "../components/WelcomeHeader";
import WelcomeFooter from "../components/WelcomeFooter";

const { width } = Dimensions.get("window");


type RootStackParamList = {
  Onboarding: undefined;
  Login: undefined;
};


type Props = NativeStackScreenProps<
  RootStackParamList,
  "Onboarding"
>;

type ScreenItem = {
  id: string;
  component: React.ReactNode;
};

const OnBoardingScreens: React.FC<Props> = ({
  navigation,
}) => {
  const flatListRef = useRef<FlatList<ScreenItem>>(null);
  const [currentIndex, setCurrentIndex] =
    useState<number>(0);

  const screens: ScreenItem[] = [
    { id: "1", component: <Welcome1 /> },
    { id: "2", component: <Welcome2 /> },
    { id: "3", component: <Welcome3 /> },
  ];

  
  const onViewRef = useRef(
    (info: {
      viewableItems: ViewToken[];
    }) => {
      if (info.viewableItems.length > 0) {
        const index = info.viewableItems[0]
          .index as number;
        setCurrentIndex(index);
      }
    }
  );

  const renderItem: ListRenderItem<ScreenItem> = ({
    item,
  }) => (
    <View style={{ width }}>{item.component}</View>
  );

  return (
    <View style={styles.container}>
      <WelcomeHeader />

      <FlatList
        ref={flatListRef}
        data={screens}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
      />

      <WelcomeFooter
        currentIndex={currentIndex}
        totalScreens={screens.length}
        onGetStarted={() =>
          navigation.replace("Login")
        }
      />
    </View>
  );
};

export default OnBoardingScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
