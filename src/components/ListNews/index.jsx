import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, ContainerNews, BoxImageNews, BoxNews, TitleNews } from './styles';

export function ListNews({ data, goToNewsDetail }) {
  return (
    <Container onPress={goToNewsDetail}>
      <ContainerNews>
        <BoxImageNews>
          <Image
            style={{maxWidth: 70, minHeight: 70}}
            source={{
              uri: data.image,
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
