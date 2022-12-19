import { Container, Divider, Hour, Info, Meal, Meat, Status, Title } from "./styles";

type Props = {
    hora: string
    nome: string
    status: boolean
}

export default function DayList({hora, nome, status}: Props) {
    return (
        <Container>
            <Title>12.08.22</Title>
            <Meal>
                <Info>
                    <Hour>{hora}</Hour>
                    <Divider />
                    <Meat>{nome}</Meat>
                </Info>
                <Status type={status}/>
            </Meal>
        </Container>
    )
}