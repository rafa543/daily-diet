import Button from "@components/Button";
import Feedback from "@components/Feedback";
import { StatusBar, Text, View } from "react-native";
import { useTheme } from "styled-components/native";
import { Container } from "./styles";

export default function FeedbackScreen() {
    const { COLORS } = useTheme()
    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor={COLORS.GRAY_600}
                translucent
            />
            <Feedback
                title={"Continue assim!"} 
                subtitle={"Você continua dentro da dieta. Muito bem!"}
                onDiet={true}
            />
        </Container>
    )
}