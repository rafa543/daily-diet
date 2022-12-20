import { TextInput } from "react-native";
import styled from "styled-components/native";

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

export const Input = styled(TextInput)`
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_500};
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

export const ButtonDiet = styled.TouchableOpacity`
    width: 47%;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    height: 50px;
    border-radius: 6px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const Status = styled.View`
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.COLORS.GREEN_DARK};
    border-radius: 4px;
    margin-right: 6px;
`