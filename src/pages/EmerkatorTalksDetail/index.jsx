import React, {useState, useMemo} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import {parseISO, format} from 'date-fns';
import { ptBR } from 'date-fns/locale';
import {decode} from 'html-entities';

import coreTools from '../../services/coreTools';
import { HeaderApp } from "../../components/HeaderApp";
import ShareNews from './ShareNews';

import {
  ContainerGradienteNews,
  ContainterNewsDetalhe,
  BoxImageNews,
  ImageNews,
  BoxContentNews,
  TitleNews,
  BoxDateNews,
  TextContentNews,
} from "../../assets/styles";

export default function ScheduleDetail() {
  const navigation = useNavigation();
  const route = useRoute();
  const [schedule, setSchedule] = useState(route.params.data);
  const [dateSchedule, setDateSchedule] = useState(parseISO(route.params.data.data_ini.date));
  const { convertToSlug } = coreTools();

  const linkNews = useMemo(() => {
    const linkSicc = 'https://www.sicc.com.br/pt/programacoes/';
    const idSicc = 1;
    const linkZeroGrau = 'https://www.feirazerograu.com.br/pt/programacoes/';
    const idZeroGrau = 2;
    const link40Graus = 'https://www.feira40graus.com.br/pt/programacoes/';
    const id40Graus = 3;
    const linkMerkator = 'https://merkatorfeira.com.br/pt/programacoes/';
    
    const currentSiteId = 1;

    let link = '';

    if (currentSiteId === idSicc) {
      link = linkSicc;
    } else if (currentSiteId === idZeroGrau) {
      link = linkZeroGrau;
    } else if (currentSiteId === id40Graus) {
      link = link40Graus;
    } else {
      link = linkMerkator;
    }

    return link + schedule.id +'/'+ convertToSlug(schedule.nome);
  }, [schedule]);

  return (
    <ContainerGradienteNews>
      <HeaderApp showButtons={true} />
      <ScrollView>
        <ContainterNewsDetalhe>
          <BoxImageNews>
            <ImageNews 
              source={{
                uri: `http://paineldoexpositor.com.br/uploads/programacao/${schedule.image}`,
              }}
            />
          </BoxImageNews>
          <BoxContentNews>
            <TitleNews>{schedule.nome}</TitleNews>
            {schedule.local && 
            <BoxDateNews>
              Local: {schedule.local}
            </BoxDateNews>
            }
            <BoxDateNews>
              Horário: {format(dateSchedule, 'dd MMMM yyyy HH:mm', {
                locale:  ptBR,
                timeZone: 'America/Sao_Paulo',
              })}
            </BoxDateNews>
            <TextContentNews>{ decode(schedule.descricao.replace(/(<([^>]+)>)/gi, ""), {level: 'html5'})}</TextContentNews>
            <ShareNews title={schedule.nome} link={linkNews} />  
          </BoxContentNews>
        </ContainterNewsDetalhe>
        </ScrollView>
    </ContainerGradienteNews>
    
  )
}
