import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { ButtonDiet, Container, ContentButton, ContentData, DateAndTime, Hora, HourDateText, Input, InputDataHora, Status, Title } from "./styles";
import { FlatList, Platform, Text, View } from "react-native";
import Button from "@components/Button";
import { meetCreate } from "@storage/meet/meetCreate";
import { meetsGetAll } from "@storage/meet/meetGetAll";
import { meetsDeleteAll } from "@storage/meet/meetDeleteAll";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Form() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState();
    const [show, setShow] = useState(false)
    const [dateSelected, setDateSelected] = useState("")
    const [hourSelected, setHourSelected] = useState("")
    const [onDiet, setOnDiet] = useState("")

    const navigation = useNavigation()

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
            diet: onDiet === "Sim" ? true : false
        }
        // meetsGetAll()
        // meetsDeleteAll()
       
        

        try {
            await meetCreate(JSON.stringify(storage))
            // await meetCreate(JSON.stringify(storage))
            
            if(onDiet === "Sim") {
                navigation.navigate("feedback", {title: "Continue assim!", subtitle: "Você continua dentro da dieta. Muito bem!", onDiet: true})
            }else {
                navigation.navigate("feedback", {title: "Que pena!", subtitle: "Você saiu da dieta dessa vez, mas continue se esforçando e não desista!", onDiet: false})
            }
        } catch (error) {
            console.log(error)
        }

        let storageMeets = await meetsGetAll();
        console.log("-------------------------------------")
        console.log(storageMeets)

        // const teste = storageMeets.toString().replace("/", "")
        // console.log(JSON.parse(storageMeets.toString()))
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