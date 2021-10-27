import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";

import api from "../../services/api";

import {
  ContainerGradiente,
  ContainerView,
  List,
  ContainerText,
  SectionTitle,
  ContainerResultNull,
} from "../../assets/styles";

import LoadingActivityIndicator from "../../components/Loading";
import EstandeModel from "../../database/models/Estande";
import FavoritesList from "../../components/Favorites";
import { HeaderApp } from "../../components/HeaderApp";

const Favorites = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [isResultNull, setIsResultNull] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function handlegetFavorites() {
      const result = await EstandeModel.find(
        { favorito: "1" },
        {
          orderBy: { nome: "DESC" },
        }
      );
      const dataFavorite = result?.rows?._array || [];

      if (dataFavorite.length > 0) {
        setFavorites(dataFavorite);
        setIsLoading(true);
      } else {
        setIsResultNull(true);
        setIsLoading(true);
      }
    }
    handlegetFavorites();
  }, []);

  async function handleMap(repository) {
    setIsLoading(false);
    const getEstande = await api.get(`estande/${repository.id}`)
    .then((result) => {
      navigation.navigate("ExhibitorDetail", {
        data: result.data
      });
    });
  }

  return (
    <ContainerGradiente>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />

      <HeaderApp showButtons={true}/>

      <ContainerView>
        {!isLoading && <LoadingActivityIndicator />}
        {isResultNull && (
          <ContainerResultNull>
            <ContainerText>
              <SectionTitle>Nenhum favorito encontrado</SectionTitle>
            </ContainerText>
          </ContainerResultNull>
        )}
        {isLoading && (
          <List
            keyboardShouldPersistTaps="handled"
            data={favorites}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <FavoritesList
                data={item}
                dataFavored={() => {}}
                dataVisited={() => {}}
                onFavorite={() => {}}
                onVisit={() => {}}
                goToMap={() => handleMap(item)}
              />
            )}
          />
        )}
      </ContainerView>
    </ContainerGradiente>
  );
};

export default Favorites;
