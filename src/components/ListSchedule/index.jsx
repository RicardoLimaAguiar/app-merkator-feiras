import React from 'react';
import { Image, StyleSheet } from 'react-native';
import {parseISO, format} from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { 
  Container,
  ContainerNews, 
  BoxImageNews,
  BoxNews, 
  TitleNews, 
  BoxDateSchedule, 
  BoxDaySchedule, 
  BoxMounthSchedule 
} from './styles';

export function ListSchedule({ data, goToScheduleDetail }) {

  const dateSchedule = parseISO(data.data_ini.date);

  {console.log(dateSchedule)}

  return (
    <Container onPress={goToScheduleDetail}>
      <ContainerNews>
        <BoxDateSchedule>
          <BoxDaySchedule>
            {format(dateSchedule, 'dd', {
              locale: ptBR,
              timeZone: 'America/Sao_Paulo',
            })}
          </BoxDaySchedule>
          <BoxMounthSchedule>
            {format(dateSchedule, 'MMM', {
              locale: ptBR,
              timeZone: 'America/Sao_Paulo',
            })}
          </BoxMounthSchedule>
        </BoxDateSchedule>
        <BoxNews>
          <TitleNews numberOfLines={3}>{data.nome}</TitleNews>
        </BoxNews>
        <BoxImageNews>
          <Image
            style={{maxWidth: 70, minHeight: 70}}
            source={{
              uri: `http://paineldoexpositor.com.br/uploads/programacao/${data.image}`,
            }}
          />
        </BoxImageNews>
      </ContainerNews>
    </Container>
  )
}
