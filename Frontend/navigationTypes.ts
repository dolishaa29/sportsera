import { ExpertiseType } from "./types";

export type RootStackParamList = {
  Onboarding: undefined;
  RoleSelection: undefined;

  PlayerRegister: { expertise?: ExpertiseType[] } | undefined;
  LeaderRegister: { expertise?: ExpertiseType[] } | undefined;

  ExpertiseScreen: {
    from: "PlayerRegister" | "LeaderRegister";
  };

  HomeTabs: undefined; // 🔥 Add this
};
