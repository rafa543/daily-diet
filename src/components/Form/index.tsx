import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { ButtonDiet, Container, ContentButton, ContentData, DateAndTime, Hora, HourDateText, Input, InputDataHora, Status, Title } from "./styles";
import { FlatList, Platform, Text, View } from "react-native";
import Button from "@components/Button";

export default function Form() {
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

    return (
        <>
            <Container>
                <Title>Nome</Title>
                <Input />

                <Title>Descrição</Title>
                <Input multiline numberOfLines={6} />

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
            <Button title="Cadastrar refeição" />
        </>
    )
}