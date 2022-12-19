import { ButtonIcon } from "@components/Button";
import DayList from "@components/DayList";
import { FlatList } from "react-native";
import { Container, Title } from "./styles";

export default function Meals() {
    return (
        <Container>
            <Title>Refeições</Title>
            <ButtonIcon title="Nova refeição" icon="add"/>
            {/* <DayList/> */}
            <FlatList
            data={["time A", "time b"]}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                <DayList />
            )}
        />
        </Container>
    )
}