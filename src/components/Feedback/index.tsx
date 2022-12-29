import Button from "@components/Button";
import { Image } from "react-native";
import { Container, Title, Subtitle, Illustration } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
    title: string
    subtitle: string
    onDiet: boolean
}

export default function Feedback({ title, subtitle, onDiet }: Props) {
    const navigation = useNavigation()

    function handleHome() {
        navigation.navigate("home")
    }
    return (
        <Container>
            <Title onDiet={onDiet}>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>

            {
                onDiet ? (
                    <Illustration source={require("../../assets/IllustrationNaDieta.png")} />
                ) : (
                    <Illustration source={require("../../assets/IllustrationForaDaDieta.png")} />
                )
            }
            <Button largura="191" title={"Ir para a página inicial"} onPress={handleHome}/>
        </Container>
    )
}