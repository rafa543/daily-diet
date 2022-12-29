import Button from "@components/Button";
import { useRoute, useNavigation } from '@react-navigation/native';
import Feedback from "@components/Feedback";
import { StatusBar, Text, View } from "react-native";
import { useTheme } from "styled-components/native";
import { Container } from "./styles";

type RouteParams = {
    title: string
    substitle: string
    onDiet: boolean
}

export default function FeedbackScreen() {
    const { COLORS } = useTheme()

    const route = useRoute()
    const { title, substitle, onDiet } = route.params as RouteParams
    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor={COLORS.GRAY_600}
                translucent
            />
            {
                onDiet ? 
                <Feedback
                    title={"Continue assim!"} 
                    subtitle={"Você continua dentro da dieta. Muito bem!"}
                    onDiet={onDiet}
                /> :
                <Feedback
                title={"Que pena!"} 
                subtitle={"Você saiu da dieta dessa vez, mas continue se esforçando e não desista!"}
                onDiet={onDiet}
            />
            }
        </Container>
    )
}