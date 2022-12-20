import { Container, DateAndTime, Input, Title } from "./styles";

export default function Form() {
    return (
        <Container>
            <Title>Nome</Title>
            <Input />
            <Title>Descrição</Title>
            <Input multiline numberOfLines={6} />
            <DateAndTime>
                {/* <Input />
                <Input/> */}
            </DateAndTime>
        </Container>
    )
}