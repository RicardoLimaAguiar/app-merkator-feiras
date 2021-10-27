import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import {parseISO, format} from 'date-fns';
import {
  Container,
  Name,
  Description,
  Address,
  Stat,
  ListItem,
  BoxName,
  Stats,
} from "./styles";

export default function Repository({ data, onDelete }) {
  const dataNote = new Date(data.data_note);
  return (
    <Container>
      <ListItem>
        <BoxName>
          <Stats>
            <Description> {data.descricao} </Description>
          </Stats>
          <Description>
            Em: {format(dataNote, 'dd/MM/yy HH:mm', {
              timeZone: 'America/Sao_Paulo',
            })}
          </Description>
        </BoxName>
        <Address>
          <Stat onPress={onDelete}>
            <Icon name="delete" size={20} color={"#f11808"} />
          </Stat>
        </Address>
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
