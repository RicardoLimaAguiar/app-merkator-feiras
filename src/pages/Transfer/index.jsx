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
      'https://api.whatsapp.com/send?phone=5551996515213&text=Olá Desejo quero traslado para SICC 2022'
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
          <SectionTitle>O Traslado do Aeroporto Internacional Salgado Filho, em Porto Alegre - Rio Grande do Sul, até os hotéis credenciados será realizado através do transporte oficial do SICC, operacionalizado pela empresa Planalto com objetivo de oferecer maior comodidade, conforto e segurança aos nossos visitantes.{'\n\n'}A equipe da Merkator juntamente com a equipe Planalto, estará no terminal de desembarque, coordenando as saídas dos traslados até os respectivos hotéis.{'\n\n'}Plantão de atendimento:{'\n'}+55 53 99712-2792</SectionTitle>
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
            <TextTitleTraslado>Domingo 22/05</TextTitleTraslado>
          </TitleSectionTraslado>
          <ButtonTraslado>
            <TextButtonTraslado>POA {'>'} GRAMADO</TextButtonTraslado>
          </ButtonTraslado>
          <SectionTitle>Saída do Aeroporto de Porto Alegre até os Hotéis conveniados da feira.{'\n\n'}(Desembarque nos hotéis){'\n\n'}8h | 10h | 12h | 14h | 16h | 18h | 20h | 22h | 00h{'\n\n'}* Os horários previstos acima podem sofrer alterações conforme necessidade e demanda.</SectionTitle>

          <TitleSectionTraslado>
            <TextTitleTraslado>Segunda-feira 23/05</TextTitleTraslado>
          </TitleSectionTraslado>
          <ButtonTraslado>
            <TextButtonTraslado>POA {'>'} GRAMADO</TextButtonTraslado>
          </ButtonTraslado>
          <SectionTitle>Saída do Aeroporto de Porto Alegre até a feira.{'\n\n'}8h | 10h | 12h | 14 h | 16 h | 18h | 20h | 22h | 00h{'\n\n'} Os horários previstos acima podem sofrer alterações conforme necessidade e demanda.</SectionTitle>
        
          <TitleSectionTraslado>
            <TextTitleTraslado>Terça-feira 24/05</TextTitleTraslado>
          </TitleSectionTraslado>
          <ButtonTraslado>
            <TextButtonTraslado>POA {'>'} GRAMADO</TextButtonTraslado>
          </ButtonTraslado>
          <SectionTitle>Saída do Aeroporto de Porto Alegre até a feira.{'\n\n'}9h{'\n\n'}* Os horários previstos acima podem sofrer alterações conforme necessidade e demanda.</SectionTitle>
          <ButtonTraslado>
            <TextButtonTraslado>GRAMADO {'>'} POA</TextButtonTraslado>
          </ButtonTraslado>
          <SectionTitle>Gramado para Aeroporto Salgado Filho (Embarque na feira){'\n\n'}14h:30min{'\n\n'}É OBRIGATÓRIO o comparecimento do cliente no estande da Equipe do traslado para confirmar / ou agendar no horário do traslado de Gramado/Canela para Porto Alegre.Para mais informações sobre o traslado e compra antecipada entre em contato pelo número: (51) 99651-5213, Com Catherine.{'\n\n'}* Os horários previstos acima podem sofrer alterações conforme necessidade e demanda.</SectionTitle>
        
          <TitleSectionTraslado>
            <TextTitleTraslado>Quarta-feira 25/05</TextTitleTraslado>
          </TitleSectionTraslado>
          <ButtonTraslado>
            <TextButtonTraslado>POA {'>'} GRAMADO</TextButtonTraslado>
          </ButtonTraslado>
          <SectionTitle>Gramado para Aeroporto Salgado Filho (Embarque na feira).{'\n\n'}10h | 12h | 14h | 16h{'\n\n'}É OBRIGATÓRIO o comparecimento do cliente no estande da Equipe do traslado para confirmar / ou agendar no horário do traslado de Gramado/Canela para Porto Alegre.Para mais informações sobre o traslado e compra antecipada entre em contato pelo número: (51) 99651-5213, Com Catherine.{'\n\n'}* Os horários previstos acima podem sofrer alterações conforme necessidade e demanda.</SectionTitle>
          <TitleSectionTraslado>
            <TextTitleTraslado>Quinta-feira 26/05</TextTitleTraslado>
          </TitleSectionTraslado>
          <ButtonTraslado>
            <TextButtonTraslado>GRAMADO {'>'} POA</TextButtonTraslado>
          </ButtonTraslado>
          <SectionTitle>Gramado para Aeroporto Salgado Filho (Embarque nos hotéis){'\n\n'}04h | 06h| 08h | 10h | 12h | 14h{'\n\n'}É OBRIGATÓRIO o comparecimento do cliente no estande da Equipe do traslado para confirmar / ou agendar no horário do traslado de Gramado/Canela para Porto Alegre.Para mais informações sobre o traslado e compra antecipada entre em contato pelo número: (51) 99651-5213, Com Catherine.{'\n\n'}* Os horários previstos acima podem sofrer alterações conforme necessidade e demanda.</SectionTitle>
        
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
            <TextButtonTraslado>R$ 90,00</TextButtonTraslado>
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
            <TextButtonTraslado>R$ 160,00</TextButtonTraslado>
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
            <TextValores>Hotel credenciado para Serra Park e Serra Park para hotel credenciado) Ticket Avulso (um único dia)</TextValores>
            <TextButtonTraslado>R$ 30,00</TextButtonTraslado>
            <TextValores style={{marginTop:0}}>por pessoa</TextValores>
          </ButtonTraslado>

          {/* <ButtonTraslado>
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
          </ButtonTraslado> */}

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
