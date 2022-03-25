import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { useNavigation, CommonActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  ContainerGradiente,
  ContainerGradientePreload,
  IconPreload,
  ContainerCenter,
  TextWhite,
} from "../../assets/styles";
import api from "../../services/api";
import useDatabase from "../../database/useDatabase";

const Preload = () => {
  const navigation = useNavigation();
  const isDbLoadingComplete = useDatabase();

  useEffect(() => {
    if (isDbLoadingComplete) {
      handleEvento();
    }
  }, [isDbLoadingComplete]);

  async function handleEvento() {
    await api.get("config/3").then((result) => {
      let configValue = JSON.stringify(result.data);
      AsyncStorage.setItem("@storage_config", configValue);

      api.get(`appconfig/1`).then((response) => {
        let appConfigValue = JSON.stringify(response.data);
        AsyncStorage.setItem("@storage_appconfig", appConfigValue);
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "Home" }],
          })
        );
      });

      // api.get(`evento/${result.data.evento}`).then((response) => {
      //   let eventValue = JSON.stringify(result.data);
      //   AsyncStorage.setItem("@storage_event", eventValue);
        
      // });
    });
  }
  return (
    <ContainerGradientePreload>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      <ContainerCenter>
        <IconPreload
          source={require("../../assets/images/Icon-marketing-1024x1024.png")}
        />
        <TextWhite>Buscando informações</TextWhite>
      </ContainerCenter>
    </ContainerGradientePreload>
  );
};

export default Preload;
