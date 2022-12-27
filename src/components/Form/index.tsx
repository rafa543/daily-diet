import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { ButtonDiet, Container, ContentButton, ContentData, DateAndTime, Hora, HourDateText, Input, InputDataHora, Status, Title } from "./styles";
import { FlatList, Platform, Text, View } from "react-native";
import Button from "@components/Button";
import { meetCreate } from "@storage/meet/meetCreate";
import { meetsGetAll } from "@storage/meet/meetGetAll";
import { meetsDeleteAll } from "@storage/meet/meetDeleteAll";

export default function Form() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState();
    const [show, setShow] = useState(false)
    const [dateSelected, setDateSelected] = useState("")
    const [hourSelected, setHourSelected] = useState("")
    const [onDiet, setOnDiet] = useState("")

    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate || date
        setShow(Platform.OS === 'ios')
        setDate(currentDate)

        let tempDate = new Date(currentDate)
        let fDate = tempDate.getDate() + "/" + (tempDate.getMonth() + 1) + "/" + tempDate.getFullYear()
        let fTime = tempDate.getHours() + ':' + tempDate.getMinutes()
        setDateSelected(fDate)
        setHourSelected(fTime)
        console.log(fDate + ' ( ' + fTime + ")")
    }

    const showMode = (currentMode: any) => {
        setShow(true);
        console.log(currentMode)
        setMode(currentMode);
    };

    async function handleAddMeet() {

        const storage = {
            nome: name,
            description: description,
            data: dateSelected,
            hour: hourSelected,
            diet: onDiet
        }
        // meetsGetAll()
        // meetsDeleteAll()
        // meetCreate(JSON.stringify(storage))
        let storageMeets = await meetsGetAll();
        // const teste = storageMeets.toString().replace("/", "")
        console.log("-------------------------------------")
        console.log(storageMeets)
        // console.log(JSON.parse(storageMeets.toString()))
        storageMeets.forEach(function(user, index) {
            console.log("[" + index + "]: " + user);
            const tasdxg = JSON.parse(user)
            console.log(tasdxg.nome)
        });
        // console.log(storageMeets.toString().replace("/", ""))
        // console.log(storage)
    }

    return (
        <>
            <Container>
                <Title>Nome</Title>
                <Input onChangeText={setName} />

                <Title>Descrição</Title>
                <Input multiline description={true} onChangeText={setDescription} />

                <DateAndTime>
                    <ContentData>
                        <Title>Data</Title>
                        <InputDataHora onPress={() => showMode('date')}>
                            <HourDateText>{dateSelected}</HourDateText>
                        </InputDataHora>
                    </ContentData>

                    <ContentData>
                        <Title>Hora</Title>
                        <InputDataHora onPress={() => showMode('time')}>
                            <HourDateText>{hourSelected}</HourDateText>
                        </InputDataHora>
                    </ContentData>
                    {
                        show && (
                            <DateTimePicker
                                testID="DateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={onChange}
                            />
                        )
                    }

                </DateAndTime>

                <Title>Esta dentro da dieta?</Title>
                <ContentButton>
                    {
                        ["Sim", "Não"].map((item, key) => (
                            <ButtonDiet key={key} onDiet={item === onDiet} item={item} onPress={() => setOnDiet(item)}>
                                <Status color={item} />
                                <Text>{item}</Text>
                            </ButtonDiet>
                        ))
                    }

                </ContentButton>


            </Container >
            <Button title="Cadastrar refeição" onPress={handleAddMeet} />
        </>
    )
}