import React from 'react';
import { Image, StyleSheet } from 'react-native';
import coreTools from '../../services/coreTools';
import { Container, ContainerNews, BoxImageNews, BoxNews, TitleNews } from './styles';

export function ListNews({ data, goToNewsDetail }) {

  const { switchSizeImage } = coreTools();

  return (
    <Container onPress={goToNewsDetail}>
      <ContainerNews>
        <BoxImageNews>
          <Image
            style={{maxWidth: 70, minHeight: 70}}
            source={{
              uri: switchSizeImage(data.image, 'sm'),
            }}
          />
        </BoxImageNews>
        <BoxNews>
          <TitleNews numberOfLines={3}>{data.title}</TitleNews>
        </BoxNews>
      </ContainerNews>
    </Container>
  )
}
