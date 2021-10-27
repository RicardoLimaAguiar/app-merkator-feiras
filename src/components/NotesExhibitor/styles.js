import styled from "styled-components/native";

export const Container = styled.View`
  padding: 10px;
  background: #fff;
  margin-bottom: 14px;
  border-radius: 8px;
  margin-right: 20px;
  margin-left: 20px;
`;

export const ListItem = styled.View`
  flex-direction: row;
  border-bottom-color: #e6e8ec;
  border-bottom-width: 1px;
  padding-bottom: 15px;
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
  font-size: 16px;
  color: #626c81;
  font-weight: 800;
  padding-bottom: 5px;
  font-family: "Roboto";
`;

export const Description = styled.Text`
  color: #666;
  margin-top: 5px;
  line-height: 20px;
  font-family: "Roboto";
`;

export const Address = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  width: 50px;
`;

export const Rua = styled.Text`
  font-size: 12px;
  color: #666;
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
