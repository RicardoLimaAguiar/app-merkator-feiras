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
  Pavilhao,
} from "./styles";

export default function Repository({
  data,
  dataFavored,
  dataVisited,
  onFavorite,
  onVisit,
  goToMap,
}) {
  function setColorFavored(idColor) {
    let colorFavored = "#A0A4B4";
    if (dataFavored.length > 0) {
      JSON.parse(dataFavored).map((item) => {
        if (item.id === idColor) {
          colorFavored = "#FFCC00";
        }
      });
    }
    return colorFavored;
  }
  function setColorFavorited(idColor) {
    let colorVisited = "#A0A4B4";
    if (dataVisited.length > 0) {
      JSON.parse(dataVisited).map((item) => {
        if (item.id === idColor) {
          colorVisited = "#FFCC00";
        }
      });
    }
    return colorVisited;
  }
  function joinArray(product){
    var arrReturn = [];
    product.map((item) => {
      arrReturn.push(item.name);
    });
    return arrReturn.join(', ');
  }
  return (
    <Container 
      onPress={goToMap} 
      style={styles.shadow} 
      activeOpacity={0.7}
    >
      <ListItem>
        <BoxName>
          <Name>{data.nome}</Name>
          {data.produto_cliente.length > 0 && (
            <Description>{joinArray(data.produto_cliente)}</Description>
          )}
          <BoxLocal>
            {data._embedded.pedido._embedded.pavilhao.length !== 0 && (
              <Pavilhao>{data._embedded.pedido._embedded.pavilhao.nome}</Pavilhao>
            )}
            {data.corredor.length !== 0 && (
              <Corredor>Corredor: {data.corredor}</Corredor>
            )}
            {data.rua.length !== 0 && <Rua>Rua: {data.rua}</Rua>}
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
