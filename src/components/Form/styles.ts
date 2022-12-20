import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
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
`