import { Text } from "react-native";
import { Container, Title } from "./styles";

import { Largura } from "./styles";

export default function Button({largura, title, ...rest}: Largura ) {
    return (
        <Container largura={largura} {...rest} >
            <Title>{title}</Title>
        </Container>
    )
}