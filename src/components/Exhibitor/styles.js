import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs((props) => ({
  activeOpacity: 0.7,
}))`
  padding: 10px;
  background: #fff;
  margin-bottom: 14px;
  border-radius: 8px;
  margin-right: 20px;
  margin-left: 20px;
`;

export const ListItem = styled.View`
  flex-direction: row;
`;

export const BoxName = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const BoxLocal = styled.View`
  color: #a0a4b4;
  font-size: 12px;
  flex-direction: row;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #1c1c1c;
  padding-bottom: 0px;
  font-family: ${({ theme }) => theme.fonts.roboto700};
`;

export const Description = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #666;
  margin-top: 5px;
  line-height: 20px;
  font-size: 13px;
`;

export const Address = styled.View`
  flex-direction: row;
  margin-top: 15px;
  align-items: center;
  justify-content: flex-end;
  width: 100px;
  border-left-color: #e6e8ec;
  border-left-width: 1px;
`;

export const Rua = styled.Text`
  font-size: 12px;
  color: #666;
  font-family: ${({ theme }) => theme.fonts.roboto400};
  margin-left: 30px;
`;

export const Pavilhao = styled.Text`
  font-size: 12px;
  color: #666;
  font-family: ${({ theme }) => theme.fonts.roboto400};
  margin-right: 30px;
`;

export const Corredor = styled.Text`
  font-size: 12px;
  color: #666;
`;

export const Stats = styled.View`
  flex-direction: row;
  margin-top: 0px;
`;

export const Stat = styled.TouchableOpacity.attrs((props) => ({
  activeOpacity: 0.7,
}))`
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
  color: #a0a4b4;
`;

export const ButtonPositions = styled.View`
  flex: 1;
`;

export const StatCount = styled.Text`
  margin-left: 6px;
`;
