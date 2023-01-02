import { ButtonIcon } from "@components/ButtonIcon";
import DayList from "@components/DayList";
import { FlatList } from "react-native";
import { Container, Title } from "./styles";
import {useNavigation} from "@react-navigation/native"
import { useEffect, useState } from "react";
import { meetsGetAll, PropsMeets } from "@storage/meet/meetGetAll";

type Meets = {
    nome: string
    description: string
    data: string
    hour: string
    diet: boolean
}

export default function Meals() {
    const navigation = useNavigation()
    const [meets, setMeets] = useState<PropsMeets[]>([])

    async function teste() {
        let storageMeets = await meetsGetAll();
        storageMeets.map((i: any) => {
            const obj: PropsMeets = JSON.parse(i);
            // console.log(obj.description)
            // setMeets()
        })
        // for(let i = 0; i < storageMeets.length; i++){
        //     let teste = storageMeets[i]
        // }
    }

    function teste2() {
        console.log(meets)
        // meets.map((i: any) => {
        //     const obj: PropsMeets = JSON.parse(i);
        //     console.log(obj.description)
        // })
    }

    useEffect(() => {
        teste()
        teste2()
    }, [])

    const data = [
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

    function handleNewMeal() {
        console.log("dd")
        navigation.navigate("create")
    }

    return (
        <Container>
            <Title>Refeições</Title>
            <ButtonIcon title="Nova refeição" icon="add" onPress={handleNewMeal} />
            <FlatList
                data={data}
                keyExtractor={(item) => item.nome}
                renderItem={({ item }) => (
                    <DayList hora={item.hora} nome={item.nome} status={item.status} />
                )}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    )
}