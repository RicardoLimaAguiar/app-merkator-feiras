import React, { useState, useEffect } from "react";
import { StatusBar, StyleSheet, Linking } from "react-native";

import { useRoute } from "@react-navigation/native";
import { WebView } from "react-native-webview";


import api from "../../services/api";
import LoadingActivityIndicator from "../../components/Loading";
import { HeaderApp } from "../../components/HeaderApp";

import LogoTransporteOficial from '../../assets/images/logo-tranportadora-oficial.svg';
import IconBussTraslado from '../../assets/images/icon-buss-traslado.svg';
import IconTwoBussTraslado from '../../assets/images/icon-two-buss-traslado.svg';
import IconBussTowerTraslado from '../../assets/images/icon-buss-tower-traslado.svg';

import {
  ContainerGradiente,
  ContainerScrollView,
  ContainerTextBgWhite,
  SectionTitle,
  ButtonDestaqueTraslado,
  TextButtonTraslado,
  ButtonTraslado,
  ImageTransporteOficial,
  TextTrasnporteOficial,
  TitleSectionTraslado,
  TextTitleTraslado,
  TextValores,
  BoxContainerIcon
} from "../../assets/styles";


const Transfer = () => {
  const route = useRoute();
  const idEvento = route.params.evento;
  const [isLoading, setIsLoading] = useState(true);
  const [traslado, setTraslado] = useState("");

  useEffect(() => {
    const loadEvent = async () =>
      api.get(`evento/${idEvento}`).then((result) => {
        setTraslado(result.data.traslado);
        setIsLoading(false);
      });

    loadEvent();
  }, []);

  function handlePurchaseTicket(){
    Linking.openURL(
      'https://api.whatsapp.com/send?phone=5553997122792&text=Desejo%20adquirir%20traslado'
    );
  }

  return (
    <ContainerGradiente>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />

      <HeaderApp showButtons={true}/>
      
      <ContainerScrollView>
        <ContainerTextBgWhite>
          <SectionTitle>O Traslado do Aeroporto Internacional Salgado Filho, em Porto Alegre - Rio Grande do Sul, até os hotéis credenciados será realizado através do transporte oficial da Zero Grau, operacionalizado pela empresa Planalto com objetivo de oferecer maior comodidade, conforto e segurança aos nossos visitantes.{'\n\n'}A equipe da Merkator juntamente com a equipe Planalto, estará no terminal de desembarque, coordenando as saídas dos traslados até os respectivos hotéis.{'\n\n'}Plantão de atendimento:{'\n'}+55 53 99712-2792</SectionTitle>
          <ImageTransporteOficial>
            <TextTrasnporteOficial>Transporte oficial</TextTrasnporteOficial>
            <LogoTransporteOficial 
              width={200}
              height={100}
            />
          </ImageTransporteOficial>
          
          <ButtonDestaqueTraslado onPress={() => handlePurchaseTicket()}>
            <TextButtonTraslado>Compre sua pasagem aqui</TextButtonTraslado>
          </ButtonDestaqueTraslado>

          <TitleSectionTraslado>
            <TextTitleTraslado>Domingo 14/11</TextTitleTraslado>
          </TitleSectionTraslado>
          <ButtonTraslado>
            <TextButtonTraslado>POA {'>'} GRAMADO</TextButtonTraslado>
          </ButtonTraslado>
          <SectionTitle>Aeroporto Salgado Filho para Gramado/Canela{'\n\n'}(Desembarque nos hotéis){'\n\n'}8h | 10h | 11h30min | 13h | 14h | 15h30min | 17h | 18h30min | 19h30min | 20h30min | 22h</SectionTitle>

          <TitleSectionTraslado>
            <TextTitleTraslado>Segunda-feira 15/11</TextTitleTraslado>
          </TitleSectionTraslado>
          <ButtonTraslado>
            <TextButtonTraslado>POA {'>'} GRAMADO</TextButtonTraslado>
          </ButtonTraslado>
          <SectionTitle>Aeroporto Salgado Filho para Gramado{'\n\n'}(Desembarque na feira){'\n\n'}07h30min | 09h30min | 10h30min | 11h30min | 13h | 14h | 15h{'\n\n'}Aeroporto Salgado Filho para Gramado/Canela{'\n\n'}(Desembarque nos hotéis){'\n\n'}16h | 17h | 19h | 18h30min | 20h | 22h30min</SectionTitle>
        
          <TitleSectionTraslado>
            <TextTitleTraslado>Terça-feira 16/11</TextTitleTraslado>
          </TitleSectionTraslado>
          <ButtonTraslado>
            <TextButtonTraslado>POA {'>'} GRAMADO</TextButtonTraslado>
          </ButtonTraslado>
          <SectionTitle>Aeroporto Salgado Filho para Gramado{'\n\n'}(Desembarque na feira){'\n\n'}8h30min</SectionTitle>
          <ButtonTraslado>
            <TextButtonTraslado>GRAMADO {'>'} POA</TextButtonTraslado>
          </ButtonTraslado>
          <SectionTitle>Gramado para Aeroporto Salgado Filho{'\n\n'}(Embarque na feira){'\n\n'}8h30min{'\n\n'}Todos os horários de retorno devem ser agendados previamente nos balcões de traslado oficial, na feira.</SectionTitle>
        
          <TitleSectionTraslado>
            <TextTitleTraslado>Quarta-feira 17/11</TextTitleTraslado>
          </TitleSectionTraslado>
          <ButtonTraslado>
            <TextButtonTraslado>POA {'>'} GRAMADO</TextButtonTraslado>
          </ButtonTraslado>
          <SectionTitle>Gramado/Canela para Aeroporto Salgado Filho{'\n\n'}(Embarque nos hotéis){'\n\n'}04h | 06h{'\n\n'}Todos os horários de retorno devem ser agendados previamente nos balcões de traslado oficial, na feira.</SectionTitle>
          <ButtonTraslado>
            <TextButtonTraslado>GRAMADO {'>'} POA</TextButtonTraslado>
          </ButtonTraslado>
          <SectionTitle>Gramado/Canela para Aeroporto Salgado Filho{'\n\n'}(Embarque na feira){'\n\n'}10h | 11h30min | 13h | 14h | 15h30min{'\n\n'}Todos os horários de retorno devem ser agendados previamente nos balcões de traslado oficial, na feira.</SectionTitle>
        
          <TitleSectionTraslado>
            <TextTitleTraslado>Quinta-feira 18/11</TextTitleTraslado>
          </TitleSectionTraslado>
          <ButtonTraslado>
            <TextButtonTraslado>POA {'>'} GRAMADO</TextButtonTraslado>
          </ButtonTraslado>
          <SectionTitle>Gramado/Canela para Aeroporto Salgado Filho{'\n\n'}(Embarque nos hotéis){'\n\n'}04h30min | 06h30min | 08h | 10h | 12h | 14h{'\n\n'}Todos os horários de retorno devem ser agendados previamente nos balcões de traslado oficial, na feira.</SectionTitle>
        
          <TitleSectionTraslado>
            <TextTitleTraslado>Valores</TextTitleTraslado>
          </TitleSectionTraslado>
          <ButtonTraslado>
            <TextButtonTraslado>TICKET ÚNICO</TextButtonTraslado>
            <BoxContainerIcon>
              <IconBussTraslado 
                width={200}
                height={100}
              />
            </BoxContainerIcon>
            <TextValores>Aeroporto (POA) para Gramado/Canela ou Gramado/Canela para Aeroporto (POA)</TextValores>
            <TextButtonTraslado>R$ 80,00</TextButtonTraslado>
            <TextValores style={{marginTop:0}}>por pessoa</TextValores>
          </ButtonTraslado>

          <ButtonTraslado>
            <TextButtonTraslado>COMBO IDA E VOLTA</TextButtonTraslado>
            <BoxContainerIcon>
              <IconTwoBussTraslado 
                width={200}
                height={100}
              />
            </BoxContainerIcon>
            <TextValores>Aeroporto (POA) para Gramado/Canela e Gramado/Canela para Aeroporto (POA)</TextValores>
            <TextButtonTraslado>R$ 140,00</TextButtonTraslado>
            <TextValores style={{marginTop:0}}>por pessoa</TextValores>
          </ButtonTraslado>

          <ButtonTraslado>
            <TextButtonTraslado>TICKET AVULSO</TextButtonTraslado>
            <BoxContainerIcon>
              <IconBussTowerTraslado 
                width={200}
                height={100}
              />
            </BoxContainerIcon>
            <TextValores>Hotel para feira {'\n'}(dia avulso)</TextValores>
            <TextButtonTraslado>R$ 10,00</TextButtonTraslado>
            <TextValores style={{marginTop:0}}>por pessoa</TextValores>
          </ButtonTraslado>

          <ButtonTraslado>
            <TextButtonTraslado>COMBO FEIRA</TextButtonTraslado>
            <BoxContainerIcon>
              <IconBussTowerTraslado 
                width={200}
                height={100}
              />
            </BoxContainerIcon>
            <TextValores>Hotel para feira {'\n'}(todos os dias do evento)</TextValores>
            <TextButtonTraslado>R$ 20,00</TextButtonTraslado>
            <TextValores style={{marginTop:0}}>por pessoa</TextValores>
          </ButtonTraslado>

          <ButtonDestaqueTraslado onPress={() => handlePurchaseTicket()}>
            <TextButtonTraslado>Compre sua pasagem aqui</TextButtonTraslado>
          </ButtonDestaqueTraslado>
        </ContainerTextBgWhite>
      </ContainerScrollView>
    </ContainerGradiente>
  );
};

export default Transfer;

const styles = StyleSheet.create({
  scroll: {
    paddingBottom: 23,
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 23,
  },
  p: {
    fontSize: 16,
    color: "#a0a4b4",
    flex: 1,
    marginBottom: -70,
    fontFamily: "Roboto",
  },
  h2: {
    color: "#1C1C1C",
    fontSize: 14,
    marginBottom: -40,
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  h5: {
    color: "#1C1C1C",
    fontSize: 14,
    marginBottom: -50,
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  strong: {
    fontWeight: "700",
    color: "#1C1C1C",
    fontFamily: "Roboto",
  },
  bull: {
    color: "#1C1C1C",
  },
  div: {
    backgroundColor: "#000",
  },
  loading: {
    alignSelf: "center",
    marginVertical: 20,
  },
});
