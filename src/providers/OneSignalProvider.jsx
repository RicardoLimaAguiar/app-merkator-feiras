import React from "react";
import OneSignal from "react-native-onesignal";
import Constants from "expo-constants";
import { useOneSignal} from '../hooks/useOneSignal'


export const OneSignalProvider = ({ children }) => {
  useOneSignal(Constants.manifest.extra.oneSignalAppId);
  return <React.Fragment>{children}</React.Fragment>;
};
