import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const ContainerGradiente = styled(LinearGradient).attrs((props) => ({
  colors: [
    props.theme.colors.gradient.first,
    props.theme.colors.gradient.seccond,
  ],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
}))`
  flex: 1;
`;