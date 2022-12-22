import { Text } from "react-native";
import { Container, Title } from "./styles";

import { Largura } from "./styles";

export default function Button({largura, title}: Largura ) {
    return (
        <Container largura={largura}>
            <Title>{title}</Title>
        </Container>
    )
}