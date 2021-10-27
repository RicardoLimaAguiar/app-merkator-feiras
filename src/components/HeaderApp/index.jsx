import React, { useEffect, useState } from 'react';
import { Linking } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { 
  FontAwesome as Icon, 
  FontAwesome5 as FontIcon 
} from "@expo/vector-icons";

import LogoZeroSVG from "../../assets/images/logo-zero-grau.svg";
import ListRedes from '../../components/ListRedesSocias';

import {
  ContainerLogoEvento,
  BoxButtonHeader,
  ContainerNavigationHead,
  RowIconRedes,
  BoxIconRedes,
  BoxIconHeadRedes,
  ContainerIconRedesHeader
} from "../../assets/styles";

export function HeaderApp({ showButtons }) {
  const navigation = useNavigation();
  const [redes, setRedes] = useState([]);
  const [isLoadingRedes, setIsLoadnigRedes] = useState(false);

  useEffect(() => {
    getDataRedes();
  }, []);


  const getDataRedes =  async () => {
    try {
      const dataAppConfig = await AsyncStorage.getItem("@storage_appconfig");
      if (dataAppConfig !== null) {
        let resultAsyncConfig = JSON.parse(dataAppConfig);
        setRedes(JSON.parse(resultAsyncConfig.redes_sociais));
        setIsLoadnigRedes(true);
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  function handleGoBack() {
    navigation.goBack();
  }

  function handleGoHome() {
    navigation.navigate("Home");
  }
  
  const goToRedesSociais = (dataUrl) => {
    Linking.openURL(
      dataUrl
    ).catch((err) => console.error("Couldn't load page", err));
  };

  return(
    <>
      <ContainerNavigationHead>
        <BoxButtonHeader style={{marginLeft: 20}}>
          {showButtons && 
            <BorderlessButton onPress={handleGoBack} style={{height:30, width:30}} opacity={0.7}>
              <Icon
                name={"chevron-left"}
                size={28}
                color="#FFFFFF"
              />
            </BorderlessButton>
          }
        </BoxButtonHeader>
        <BoxButtonHeader style={{marginRight: 20}}>
          {showButtons &&
          <BorderlessButton onPress={handleGoHome} opacity={0.7}>
            <Icon
              name={"home"}
              size={28}
              color="#FFFFFF"
            />
            </BorderlessButton>
          }
        </BoxButtonHeader>
      </ContainerNavigationHead>
      <ContainerLogoEvento>
        <LogoZeroSVG 
          width={200}
          height={100}
        />
      </ContainerLogoEvento>
      <ContainerIconRedesHeader>
        <RowIconRedes>
          {isLoadingRedes && redes.map((data) => (
              <BoxIconHeadRedes onPress={() => goToRedesSociais(data.url_rede_social)} activeOpacity={0.7}>
                <FontIcon name={data.icone_rede_social} size={35} color="#ffffff" />
              </BoxIconHeadRedes>
          ))}
        </RowIconRedes>
      </ContainerIconRedesHeader>  
      
    </>
  );
};
