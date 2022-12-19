import Header from "@components/Header";
import Meals from "@components/Meals";
import Percent from "@components/Percent";
import { Container } from "./styles";

export default function Home() {
    return (
        <Container>
            <Header/>
            <Percent/>
            <Meals/>
        </Container>
    )
}
