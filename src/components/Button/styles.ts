import styled, { css } from "styled-components/native";

export type Largura = {
    largura?: string
    title?: string
}

export const Container = styled.TouchableOpacity<Largura>`
    /* flex: 1; */
    background-color: ${({ theme }) =>theme.COLORS.GRAY_200 };
    /* min-height: 56px;
    max-height: 56px; */
    height: 56px;
    
    ${({ theme, largura }) => largura && css`
        width: ${({ theme }) => largura }px;
    `}

    justify-content: center; 
    align-items: center;
    margin-left: 25px;
    margin-right: 25px;
    margin-bottom: 20px;
    border-radius: 6px;
`
export const Title = styled.Text`
    color: ${({ theme }) =>theme.COLORS.WHITE };
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`