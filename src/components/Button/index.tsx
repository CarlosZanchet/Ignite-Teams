import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  type?: ButtonTypeStyleProps
}

export function Button({ title, type = 'PRIMARY', ...rest}: Props) {
  return (
    <Container {...rest} type={type} activeOpacity={0.7}>
      <Title>{title}</Title>
    </Container>
  )
}