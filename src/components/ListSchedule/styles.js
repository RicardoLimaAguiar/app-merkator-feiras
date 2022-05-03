import styled from "styled-components/native";

export const ContainerNews = styled.View`
  flex-direction: row;
  min-height: 80px;
  justify-content: center;
  align-items: center;
  /* shadow-offset: 0 0;
  shadow-color: rgba(0, 0, 0, 1);
  shadow-opacity: 0.1;
  shadow-radius: 30; */
`

export const BoxDateSchedule = styled.View`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  margin-right: 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const BoxDaySchedule = styled.Text`
  color: ${({ theme }) => theme.colors.borderBotaoEMerkator};
  font-size: 28px;
  font-weight: bold;
`;
export const BoxMounthSchedule = styled.Text`
  color: ${({ theme }) => theme.colors.borderBotaoEMerkator};
  text-transform: uppercase;
`;

export const BoxImageNews = styled.View`
  width: 70px;
  height: 70px;
  margin-right: 5px;
  overflow: hidden;
  border-radius: 35px;
  border-width: 0.5px;
  border-color: ${({ theme }) => theme.colors.borderBotaoEMerkator};
  background: ${({ theme }) => theme.colors.borderBotaoEMerkator};
`;

export const BoxNews = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleNews = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto700};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textInBg};
  padding-right: 10px;
  font-weight: bold;
`;

export const SubTitleNews = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto700};
  font-size: 10px;
  color: ${({ theme }) => theme.colors.textInBg};
  padding-right: 10px;
  margin-top: 5px;
`;

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