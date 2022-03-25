import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs((props) => ({
  activeOpacity: 0.7,
}))`
  flex: 1;
  margin: 15px 3px 40px 3px;
  padding: 10px;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const TextTitle = styled.Text`
  color: ${({ theme }) => theme.colors.textInBg};
  margin-left: 5px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.roboto700};
`;