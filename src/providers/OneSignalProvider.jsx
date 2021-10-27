import React from "react";
import { useOneSignal } from "../hooks/useOneSignal";

export const OneSignalProvider = ({ children }) => {
  useOneSignal("695db98b-cc06-473a-b444-fff34caa6bc9");

  return <React.Fragment>{children}</React.Fragment>;
};
