import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs((props) => ({
  activeOpacity: 0.7,
}))`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  margin-right: 23px;
  margin-left: 23px;
  border-width: 1;
  margin-top: 15px;
  border-color: rgba(255,255,255,0.4);
  shadow-offset: 0 0;
  shadow-color: rgba(0, 0, 0, 1);
  shadow-opacity: 0.1;
  shadow-radius: 30;
`;

export const ContainerNews = styled.View`
  flex-direction: row;
  min-height: 80px;
  justify-content: center;
  align-items: center;
  padding: 9px;
`

export const BoxImageNews = styled.View`
  width: 62px;
  height: 62px;
  margin-right: 10px;
  overflow: hidden;
  border-radius: 31px;
  border-width: 0.5;
  border-color: ${({ theme }) => theme.colors.borderBotaoEMerkator};
  background: ${({ theme }) => theme.colors.borderBotaoEMerkator};
`;

export const BoxNews = styled.View`
  flex: 1;
`;

export const TitleNews = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto700};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textInBg};
  padding-right: 10px;
  font-weight: bold;
`;