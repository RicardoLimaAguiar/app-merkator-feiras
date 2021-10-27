import styled from "styled-components/native";

export const Divider = styled.View`
  height: 1;
  width: 89%;
  margin-left: 20px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;