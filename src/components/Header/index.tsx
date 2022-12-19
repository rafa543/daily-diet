import { StatusBar, Text, View } from "react-native";
import { BackButton, Container, Title } from "./styles";

export default function Header() {
    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="#D9DADB"
                translucent
            />
            <BackButton/>
            <Title>
                Nova refeição
            </Title>
            <Title/>
        </Container>
    )
}