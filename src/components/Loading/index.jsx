import React from "react";
import { ActivityIndicator } from "react-native";

import { Container } from "./styles";

export default function LoadingActivityIndicator() {
  return (
    <Container>
      <ActivityIndicator size="large" color="#ffffff" />
    </Container>
  );
}
