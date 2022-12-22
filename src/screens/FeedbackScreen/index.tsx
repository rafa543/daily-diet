import Button from "@components/Button";
import Feedback from "@components/Feedback";
import { StatusBar, Text, View } from "react-native";
import { Container } from "./styles";

export default function FeedbackScreen() {
    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="white"
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