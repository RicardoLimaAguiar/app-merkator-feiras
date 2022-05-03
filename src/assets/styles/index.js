import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import { TouchableHighlight } from "react-native";

export const ContainerCenter = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerNavigationHead = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerLogoEvento = styled.View`
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
  margin-bottom: 10;
  flex-direction: row;
`;

export const BoxButtonHeader = styled.View`
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
`;

export const IconPreload = styled.Image`
  width: 300px;
  height: 300px;
  align-items: center;
`;

export const TextWhite = styled.Text`
  color: #ffffff;
  font-size: 14px;
  margin-top: 10px;
`;

export const ContainerScrollView = styled.ScrollView`
  flex: 1;
  padding: 0 15px 23px 15px;
`;

export const ContainerView = styled.View`
  flex: 1;
  padding: 0 15px 23px 15px;
`;

export const BannerCredenciamento = styled.View`
  width: 100%;
  height: 130px;
  padding-left: 5px;
  padding-right: 5px;
`;

export const BannerImage = styled.Image`
  flex: 1;
  width: 100%;
  height: auto;
`;

export const BannerImageBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 90px;
  margin-bottom: 15px;
  margin-left: 5px;
  margin-right: 20px;
`

export const RowIcon = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
`;

export const ContainerIconRedesHeader = styled.View`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 31%;
  height: 70px;
`

export const RowIconRedes = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 70px;
  margin-top: 10px;
`;

export const BoxIcon = styled.TouchableOpacity.attrs((props) => ({
  activeOpacity: 0.7,
}))`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondary};
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  margin: 0px 4px;
  flex: 3;
`;

export const BoxIconHeadRedes = styled.TouchableOpacity.attrs((props) => ({
  activeOpacity: 0.7,
}))`
  color: #ffffff;
  border-radius: 5px;
  padding: 5px;
  width: 50px;
  height: 70px;
`;

export const BoxIconRedes = styled.TouchableOpacity.attrs((props) => ({
  activeOpacity: 0.7,
}))`
  color: #ffffff;
  align-items: flex-end;
  border-radius: 5px;
  padding: 5px;
  flex: 3;
`;


export const BoxIconEMerkator = styled.TouchableOpacity.attrs((props) => ({
  activeOpacity: 0.7,
}))`
  background: ${({ theme }) => theme.colors.borderBotaoEMerkator};
  align-items: center;
  border-radius: 5px;
  margin: 0px 4px 10px 4px;
  flex: 3;
  justify-content: center;
  padding: 0px 5px;
  min-height: 60px;
`;

export const BoxText = styled.Text`
  color: ${({ theme }) => theme.colors.borderBotaoEMerkator};
  margin-top: 5px;
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.roboto300};
`;

export const ButtonContainer = styled.TouchableOpacity.attrs((props) => ({
  activeOpacity: 0.7,
}))`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ButtonShare = styled(ButtonContainer)`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 5px;
`;

export const BoxEMerkatorTalks = styled.View`
  flex: 1;
  min-height: auto;
  background-color: ${({ theme }) => theme.colors.borderBotaoEMerkator};
  border-radius: 5px;
  margin: 40px 4px 10px 4px;
`

export const ImageEmerkatorTalks = styled.Image`
  width: 100%;
  height: 67px;
  border-radius: 5px;
`;

export const ImageEMerkatorIcon = styled.Image`
  min-height: 31px;
  width: 170px;
`;

export const ButtonCredenciamento = styled.View`
  width: 300px;
  height: 60px;
  background: #10350c;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const TextButton = styled.Text`
  color: #ffffff;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.roboto700};
`;

export const FormSearch = styled.View`
  height: 45px;
  background: #fff;
  margin-bottom: 20px;
  margin-top: 0px;
  border-radius: 2px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InputSearch = styled.TextInput.attrs({
  placeholderTextColor: "#FFFFFF",
})`
  flex: 1;
  padding: 12px 15px;
  border-radius: 4px;
  font-size: 16px;
  color: #000;
  background: ${({ theme }) => theme.colors.secondary};
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.fonts.roboto400};
  margin: 0 15px;
`;

export const List = styled.FlatList`
  flex: 1;
  margin: 0 -20px;
`;
export const ContainerEventDetail = styled.View`
  flex: 1;
  margin: 0px 15px 20px 15px;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  padding-bottom: 20px;
`;
export const ContainerResultNull = styled.View`
  margin: 0px 15px 20px 15px;
  background: #ffffff;
  border-radius: 8px;
  padding-bottom: 20px;
`;

export const ContainerText = styled.View`
  padding: 10px 25px 0 25px;
`;

export const TitleExhibitor = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.borderBotaoEMerkator};
  margin-bottom: 5px;
  margin-top: 10px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.roboto700};
`;

export const TitleNewsHome = styled.Text`
  font-size: 24px;
  color: ${({theme}) => theme.colors.primary};
  margin-bottom: 5px;
  margin-top: 10px;
  margin-left: 5px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.roboto700};
`;

export const RowMarca = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  margin: 0 -5px;
`;

export const BoxMarca = styled.View`
  padding: 10px;
  background: ${({ theme }) => theme.colors.gradient.first};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin: 5px;
  text-align: center;
  min-width: 45%;
  align-content: center;
`;

export const TextMarca = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.roboto400};
`;

export const ContainerDescription = styled.Text`
  color: ${({ theme }) => theme.colors.borderBotaoEMerkator};
  font-size: 14px;
  margin-bottom: 20px;
  font-family: ${({ theme }) => theme.fonts.roboto500};
  align-items: flex-start;
  line-height: 20px;
`;

export const SectionTitle = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  justify-content: flex-start;
  margin-bottom: 10px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.roboto700};
`;

export const SectionTitleAnotation = styled.Text`
  color: #000000;
  justify-content: flex-start;
  font-size: 16px;
  margin-left: 10px;
  margin-bottom: 10px;
  ${({ theme }) => theme.fonts.roboto700};
`;

export const ContainerProduto = styled.View`
  justify-content: flex-start;
  flex-direction: row;
  margin-bottom: 15px;
`;

export const BoxProduto = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
`;

export const TextProduto = styled.Text`
  color: ${({ theme }) => theme.colors.borderBotaoEMerkator};
  justify-content: flex-start;
  margin-bottom: 8px;
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.roboto400};
`;

export const BoxFones = styled.View``;

export const TextFone = styled.TouchableOpacity.attrs((props) => ({
  activeOpacity: 0.7,
}))`
  color: #00407b;
  text-align: left;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const BoxSpeaker = styled.Text`
  font-size: 18px;
  color: #1c1c1c;
  margin-bottom: 26px;
  margin-top: 15px;
  background: #e8eaef;
  padding: 10px;
  max-height: 45px;
  font-family: ${({ theme }) => theme.fonts.roboto500};
`;

export const ButtonContainerExhibitor = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`;
export const ButtonExhibitor = styled.TouchableOpacity.attrs((props) => ({
  activeOpacity: 0.7,
}))`
  flex: 1;
  height: 40px;
  margin: 0 5px;
  background: #290d7c;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  flex-direction: row;
`;

export const ButtonCredentials = styled.View`
  width: 50px;
  height: 50px;
  padding: 0 10px;
  background: #003f78;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const TextButtonExhibitor = styled.Text`
  color: #ffffff;
  font-size: 9px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-transform: uppercase;
  flex-direction: row;
  margin-left: 0px;
`;

export const Content = styled.View`
  justify-content: center;
  background: #ffffff;
  padding-top: 10px;
  padding-bottom: 10px;
  elevation: 20;
  z-index: 9;
  shadow-offset: 0 0;
  shadow-color: rgba(0, 0, 0, 0.01);
  shadow-opacity: 0.1;
  shadow-radius: 30;
  border-radius: 5px;
`;

export const BoxCloseModal = styled.View`
  height: 30px;
  justify-content: flex-end;
  align-items: flex-end;
`;
export const ButtonCloseModal = styled.TouchableOpacity.attrs((props) => ({
  activeOpacity: 0.7,
}))`
  justify-content: center;
  align-items: center;
  margin-right: 25px;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  padding: 5px;
  flex: 1px;
  width: 100px;
  line-height: 0px;
  height: 40px;
  color: ${({ theme }) => theme.colors.textInBg};
`;

export const LabelButtonClose = styled.Text`
  flex: 1;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textInBg};
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.roboto700};
`;

export const ContatinerListNotes = styled.View`
  flex: 1;
  padding: 20px 10px;
`;

export const Form = styled.View`
  margin-top: 10px;
  border-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#999",
})`
  flex: 1;
  height: 100px;
  padding: 11px 15px;
  border-radius: 8px;
  font-size: 14px;
  color: #a0a4b4;
  background: #e8eaef;
  margin-bottom: 10px;
  font-family: ${({ theme }) => theme.fonts.roboto400};
`;

export const Submit = styled.TouchableOpacity.attrs((props) => ({
  activeOpacity: 0.7,
}))`
  background: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 15px 14px;
  max-height: 50px;
  flex-direction: row;
`;

export const ContainerTextBgWhite = styled.View`
  font-size: 18px;
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
  padding: 25px 25px 80px 25px;
`;

export const ContainterNewsDetalhe = styled.View`
  flex: 1;
  margin: 23px 15px;
  background: rgba(255, 255, 255, 1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  min-height: 100%;
`;

export const BoxImageNews = styled.View`
  min-height: 250px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: rgba(41, 41, 41, 0.1);
`;

export const ImageNews = styled.Image`
  width: 100%;
  min-width: 100%;
  min-height: 250px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const BoxContentNews = styled.View`
  flex: 1;
  min-height: 100%;
  padding: 23px 20px;
`;

export const BoxHtmlContent = styled.View`
  flex: 1;
  min-height: 100%;
  margin: 23px 15px;
`;

export const TitleNews = styled.Text`
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.roboto700};
  color: ${({ theme }) => theme.colors.textBlack};
  line-height: 30px;
`;

export const BoxScheduleLocalHour = styled.View`
  display: flex;
  flex-direction: row;
`

export const BoxDateNews = styled.Text`
  font-size: 12px;
  margin: 20px 0 0 0;
  font-family: ${({ theme }) => theme.fonts.roboto700};
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
`;

export const TextContentNews = styled.Text`
  font-size: 16px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fonts.roboto400};
  text-align: justify;
`;

export const ButtonDestaqueTraslado = styled.TouchableOpacity.attrs((props) => ({
  activeOpacity: 1,
}))`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 15px 0px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  border-radius: 4px;
`;

export const ButtonTraslado = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 15px 0px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  border-radius: 4px;
`;

export const TextButtonTraslado = styled.Text`
  color: ${({ theme }) => theme.colors.borderBotaoEMerkator};
  font-family: ${({ theme }) => theme.fonts.roboto700};
  font-size: 18px;
  text-align: center;
`;

export const ImageTransporteOficial = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const TextTrasnporteOficial = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.roboto700};
  color: #A0A4B4;
  text-transform: uppercase;
  margin-bottom: -20px;
  margin-top: 10px;
`;

export const TitleSectionTraslado = styled.View`
  width: 100%;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  margin: 20px 0;
  padding: 10px 0;
`;

export const TextTitleTraslado = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.roboto700};
  font-size: 18px;
`;

export const BoxContainerValores = styled.View`
  background-color: ${({ theme }) => theme.colors.gradient.seccond};
  padding: 15px 0px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;  
`

export const TextValores = styled.Text`
  color: ${({ theme }) => theme.colors.textInBg};
  font-family: ${({ theme }) => theme.fonts.roboto700};
  font-size: 18px;
  margin: 25px;
  line-height: 24px;
  text-align: center;
`;

export const BoxContainerIcon = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: -15px;
`;

export const ContainerGradiente = styled(LinearGradient).attrs((props) => ({
  colors: [
    props.theme.colors.gradient.first,
    props.theme.colors.gradient.seccond,
  ],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
}))`
  flex: 1;
  padding-top: ${Constants.statusBarHeight};
`;

export const ContainerGradienteNews = styled(LinearGradient).attrs((props) => ({
  colors: [
    props.theme.colors.gradient.first,
    props.theme.colors.gradient.seccond,
  ],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
}))`
  flex: 1;
  padding-top: ${Constants.statusBarHeight};
`;

export const ContainerGradientePreload = styled(LinearGradient).attrs((props) => ({
  colors: [
    props.theme.colors.primary,
    props.theme.colors.secondary,
  ],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
}))`
  flex: 1;
  padding-top: ${Constants.statusBarHeight};
`;