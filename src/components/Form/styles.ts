import { TextInput, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type OnDiet = {
    onDiet?: boolean
    item: string
}

type ColorStatus = {
    color: string
}

type Description = {
    description?: boolean
}

export const Container = styled.View`
    flex: 1;
    margin-left: 24px;
    margin-right: 24px;
`

export const Title = styled.Text`
    margin-top: 30px;
    margin-bottom: 6px;
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-weight: bold;
`

export const Input = styled(TextInput) <Description>`
    ${({ theme, description }) => description && css`
        height: 120PX;
    `}

    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_500};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    border-radius: 6px;
    padding: 15px;
`

export const DateAndTime = styled.View`
    flex-direction: row;
    justify-content: space-between;
`
export const InputDataHora = styled.TouchableOpacity`
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_500};
    height: 50px;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
`
export const Hora = styled.TouchableOpacity`
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_500};
    height: 50px;
    border-radius: 6px;
 `
export const HourDateText = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`
export const ContentData = styled.View`
    width: 47%;
`
export const ContentButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between; 
`

export const ButtonDiet = styled(TouchableOpacity) <OnDiet>`
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    ${({ theme, onDiet, item }) => onDiet && css`
        border: 1px solid ${({ theme }) => item === 'Não' ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_DARK};
        background-color:  ${({ theme }) => item === 'Não' ? theme.COLORS.RED_LIGHT : theme.COLORS.GREEN_LIGHT};
    `}
    width: 47%;
    height: 50px;
    border-radius: 6px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const Status = styled.View <ColorStatus>`
    width: 8px;
    height: 8px;
    background-color: ${({ theme, color }) => color === "Sim" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    border-radius: 4px;
    margin-right: 6px;
`