import React from "react";
import { View, Text } from "react-native";

import { Container, TextTitle } from "./styles";

export function ListNewsFooter({goToNewsList}) {
  return (
    <Container onPress={goToNewsList}>
      <TextTitle>VEJA MAIS</TextTitle>
    </Container>
  )
}
