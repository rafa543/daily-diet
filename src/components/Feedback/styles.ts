import theme from "src/theme";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
    align-items: center;
`

type Props ={
    onDiet: boolean
}

export const Title = styled.Text <Props>`
    ${({theme, onDiet}) => css `
        color: ${({theme}) => onDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    `}
    font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
    /* color: ${({theme}) => theme.COLORS.GREEN_DARK}; */
    font-weight: bold;
    margin-bottom: 10px;
`

export const Subtitle = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    margin-bottom: 50px;
`
export const Illustration = styled.Image`
    margin-bottom: 50px;
`