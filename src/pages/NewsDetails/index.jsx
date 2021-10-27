import React, {useState, useMemo} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import {parseISO, format} from 'date-fns';
import { ptBR } from 'date-fns/locale';
import {decode} from 'html-entities';

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

export default function NewsDetail() {
  const navigation = useNavigation();
  const route = useRoute();
  const [post, setPost] = useState(route.params.data);
  const [dateNews, setDateNews] = useState(parseISO(route.params.data.data_pub.date));
  const linkNews = useMemo(() => {
    const linkSicc = 'https://www.sicc.com.br/pt/noticias/';
    const idSicc = 1;
    const linkZeroGrau = 'https://www.feirazerograu.com.br/pt/noticias/';
    const idZeroGrau = 2;
    const link40Graus = 'https://www.feira40graus.com.br/pt/noticias/';
    const id40Graus = 3;
    const linkMerkator = 'https://merkatorfeira.com.br/pt/noticias/';
    
    const currentSiteId = 2;

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

    return link + post.slug;
  }, [post]);

  return (
    <ContainerGradienteNews>
      <HeaderApp showButtons={true} />
      <ScrollView>
        <ContainterNewsDetalhe>
          <BoxImageNews>
            <ImageNews 
              source={{
                uri: post.image,
              }}
            />
          </BoxImageNews>
          <BoxContentNews>
            <TitleNews>{post.title}</TitleNews>
            <BoxDateNews>
              Por: Merkator Feiras em: {format(dateNews, 'dd MMMM yyyy HH:mm', {
                locale: ptBR,
                timeZone: 'America/Sao_Paulo',
              })}
            </BoxDateNews>
            <ShareNews title={post.title} link={linkNews} />
            <TextContentNews>{ decode(post.content.replace(/(<([^>]+)>)/gi, ""), {level: 'html5'})}</TextContentNews>
          </BoxContentNews>
        </ContainterNewsDetalhe>
        </ScrollView>
    </ContainerGradienteNews>
    
  )
}
