import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  margin: 0px 3px 10px 3px;
  padding: 10px 0 5px;
  border-radius: 3px;
  /* background-color: ${({ theme }) => theme.colors.gradient.first}; */
`;

export const TextTitle = styled.Text`
  color: ${({ theme }) => theme.colors.textInBg};
  margin-left: 0px;
  font-weight: bold;
  font-size: 26px;
  font-family: ${({ theme }) => theme.fonts.roboto700};
`;