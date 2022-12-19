import Topo from "@components/Topo";
import Meals from "@components/Meals";
import Percent from "@components/Percent";
import { Container } from "./styles";

export default function Home() {
    return (
        <Container>
            <Topo/>
            <Percent/>
            <Meals/>
        </Container>
    )
}
