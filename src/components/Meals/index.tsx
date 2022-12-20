import { ButtonIcon } from "@components/ButtonIcon";
import DayList from "@components/DayList";
import { FlatList } from "react-native";
import { Container, Title } from "./styles";

export default function Meals() {
    const data =[
        {
            nome: "X-tudo",
            descricao: "Sanduíche de pão integral com atum e salada de alface e tomate",
            data: "12/08/2022",
            hora: "16:00",
            status: true
        },
        {
            nome: "Whey protein com leite",
            descricao: "Sanduíche de pão integral com atum e salada de alface e tomate",
            data: "12/08/2022",
            hora: "16:00",
            status: true
        },
        {
            nome: "Salada cesar com frango grelhado",
            descricao: "Sanduíche de pão integral com atum e salada de alface e tomate",
            data: "12/08/2022",
            hora: "16:00",
            status: false
        },
        {
            nome: "Vitamina de banana com abacate",
            descricao: "Sanduíche de pão integral com atum e salada de alface e tomate",
            data: "12/08/2022",
            hora: "16:00",
            status: false
        },
    ]

    return (
        <Container>
            <Title>Refeições</Title>  
            <ButtonIcon title="Nova refeição" icon="add"/>
            <FlatList
            data={data}
            keyExtractor={(item) => item.nome}
            renderItem={({ item }) => (
                <DayList  hora={item.hora} nome={item.nome} status={item.status}/>
            )}
            showsVerticalScrollIndicator={false}
        />
        </Container>
    )
}