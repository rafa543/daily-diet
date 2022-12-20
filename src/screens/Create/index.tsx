import ContentCreate from "@components/ContentCreate";
import Header from "@components/Header";
import { Container } from "./styles";

export default function Create() {
    return (
        <Container>
            <Header/>
            <ContentCreate/>
        </Container>
    )
}