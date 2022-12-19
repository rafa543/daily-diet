import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'


export type ButtonIconTypeStyleProps = 'NEW' | 'EDIT' | 'DELETE'

type Props = {
    type: ButtonIconTypeStyleProps
}

export const Container = styled(TouchableOpacity) <Props>`
    width: 100%;
    height: 50px;
    background-color: ${({ theme, type }) => type == 'NEW' || type == 'EDIT' ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE};
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-color: ${({ theme, type }) => theme.COLORS.GRAY_100};
    margin-bottom: 30px;
`

export const Title = styled.Text <Props>`
    color: ${({ theme, type }) => type == 'NEW' || type == 'EDIT' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
    margin-left: 16px;
    font-size: ${({ theme, type }) => theme.FONT_SIZE.SM}px ;
    font-weight: bold;
`


export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
    size: 24,
    color: type == 'NEW' || type == 'EDIT' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100
}))``  