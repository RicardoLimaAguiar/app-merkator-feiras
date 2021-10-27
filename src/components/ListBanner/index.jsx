import React from 'react';
import { Image, StyleSheet } from 'react-native';

import {
  BoxIconEMerkator,
  ImageEMerkatorIcon,
} from "../../assets/styles";

export function ListNews({ data, goToNewsDetail }) {

  return(
    <BoxIconEMerkator onPress={goToEMerkatorCast} activeOpacity={0.7} >
      <ImageEMerkatorIcon 
        source={{uri: data.image_banner}}
      />
    </BoxIconEMerkator>
  )

}