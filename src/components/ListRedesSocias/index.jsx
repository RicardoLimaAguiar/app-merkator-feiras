import React from 'react';
import { 
  FontAwesome as Icon, 
  FontAwesome5 as FontIcon 
} from "@expo/vector-icons";

import {
  BoxIconHeadRedes,
} from "../../assets/styles";

export default function ListRedesSocias({ data, goToRedes }) {
  return (
    <BoxIconHeadRedes onPress={() => goToRedes(data.url_rede_social)} activeOpacity={0.7}>
      <FontIcon name={data.icone_rede_social} size={35} color="#ffffff" />
    </BoxIconHeadRedes>
  )

}