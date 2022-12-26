import { useNavigation } from "@react-navigation/native";
import { StatusBar, Text, View } from "react-native";
import { BackButton, BackIcon, Container, Title } from "./styles";

export default function Header() {
    const navigation = useNavigation()

    function handleGoBack() {
        navigation.navigate("home")
    }

    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="#D9DADB"
                translucent
            />
            <BackButton onPress={handleGoBack}>
                <BackIcon/>
            </BackButton>
            <Title>
                Nova refeição
            </Title>
            <Title />
        </Container>
    )
}