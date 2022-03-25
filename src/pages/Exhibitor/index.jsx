import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "react-native";

import api from "../../services/api";

import { HeaderApp } from "../../components/HeaderApp";
import LoadingActivityIndicator from "../../components/Loading";
import ExhibitorList from "../../components/Exhibitor";

import {
  ContainerGradiente,
  ContainerView,
  FormSearch,
  InputSearch,
  List,
  BoxLogoEvento,
} from "../../assets/styles";

const Exhibitor = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const idEvento = route.params.evento;
  const [isLoading, setIsLoading] = useState(false);
  const [expositores, setExpositores] = useState("");
  const [fullEspositores, setfullEspositores] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [visited, setVisited] = useState([]);

  useEffect(() => {
    handleExpositores();
    handleLoadVisited();
    handleLoadFavorites();
  }, []);

  async function handleLoadFavorites() {
    const dataFavorites = await AsyncStorage.getItem("@storage_favorite");
    if (dataFavorites !== null) {
      setFavorites(dataFavorites);
    }
  }

  async function handleLoadVisited() {
    const dataFavorites = await AsyncStorage.getItem("@storage_visited");
    if (dataFavorites !== null) {
      setVisited(dataFavorites);
    }
  }

  async function handleExpositores() {
    await api.get(`estande?evento=${idEvento}`).then((result) => {
      setExpositores(result.data._embedded.estande);
      setfullEspositores(result.data._embedded.estande);
      setIsLoading(true);
    });
  }

  async function handleMap(data) {
    navigation.navigate("ExhibitorDetail", {
      data: data,
    });
  }

  const searchFilterFunction = (text) => {
    if (text.length === 0) {
      setExpositores(fullEspositores);
    } else {
      const newData = expositores.filter((item) => {
        const itemData = `${item.nome.toUpperCase()}`;
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setExpositores(newData);
    }
  };
  return (
    <ContainerGradiente>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="dark-content"
      />
      <HeaderApp showButtons={true} />
      <FormSearch>
        <InputSearch
          onChangeText={searchFilterFunction}
          autoCorrect={false}
          autoCapitalize={"words"}
          placeholder="Procurar expositor..."
          clearButtonMode="always"
        />
      </FormSearch>
      <ContainerView>
        {!isLoading && <LoadingActivityIndicator />}
        {isLoading && (
          <List
            keyboardShouldPersistTaps="handled"
            data={expositores}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <ExhibitorList
                data={item}
                dataFavored={favorites}
                dataVisited={visited}
                onFavorite={() => {}}
                onVisit={() => {}}
                goToMap={() =>handleMap(item)}
              />
            )}
          />
        )}
      </ContainerView>
    </ContainerGradiente>
  );
};

export default Exhibitor;
