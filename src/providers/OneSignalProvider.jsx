import React from "react";
import OneSignal from "react-native-onesignal";
import Constants from "expo-constants";
OneSignal.setAppId(Constants.manifest.extra.oneSignalAppId);

export const OneSignalProvider = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};
