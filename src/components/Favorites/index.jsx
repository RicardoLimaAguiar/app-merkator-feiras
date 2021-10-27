import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { MaterialIcons as Icon } from "@expo/vector-icons";

import {
  Container,
  Name,
  Description,
  Address,
  Rua,
  Corredor,
  Stat,
  ListItem,
  BoxLocal,
  BoxName,
} from "./styles";

export default function Repository({ data, goToMap }) {
  return (
    <Container onPress={goToMap} style={styles.shadow}>
      <ListItem>
        <BoxName>
          <Name>{data.nome}</Name>
          <BoxLocal>
            {data.rua.length !== 0 && <Rua>Rua: {data.rua}</Rua>}
            {data.corredor.length !== 0 && (
              <Corredor>Corredor: {data.corredor}</Corredor>
            )}
          </BoxLocal>
        </BoxName>
        {/* <Address>
          <Stat onPress={onVisit}>
            <Icon name="check" size={30} color={setColorFavorited(data.id)} />
          </Stat>
          <Stat onPress={onFavorite}>
            <Icon name="star" size={30} color={setColorFavored(data.id)} />
          </Stat>
        </Address> */}
      </ListItem>
    </Container>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
