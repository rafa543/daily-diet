import styled from "styled-components/native";

type Props = {
    type: boolean
}

export const Container = styled.View`
    /* margin-top: 30px; */
    margin-bottom: 20px;
`
export const Title = styled.Text`
    font-size: ${({ theme }) =>  theme.FONT_SIZE.LG }px;
    font-weight: bold;
    margin-bottom: 16px;
`
export const Meal = styled.TouchableOpacity`
    border-width: 1px;
    padding: 20px;
    border-color:  ${({ theme }) =>  theme.COLORS.GRAY_500 };
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px;
    margin-bottom: 10px;
`

export const Info = styled.View`
    flex-direction: row;
    align-items: center;
`

export const Hour = styled.Text`
    font-size: ${({ theme }) =>  theme.FONT_SIZE.SM }px;
    font-weight: bold;
    margin-right: 12px;
`

export const Divider = styled.View`
    width: 2px;
    height: 16px;
    background-color: ${({ theme }) =>  theme.COLORS.GRAY_500 };
    margin-right: 12px;
`

export const Meat = styled.Text`
    font-size: ${({ theme }) =>  theme.FONT_SIZE.MD }px;
    color: ${({ theme }) =>  theme.COLORS.GRAY_200 };
    width: 220px;
`

export const Status = styled.View <Props>`
    width: 16px;
    height: 16px;
    border-radius: 7px;
    background-color:  ${({theme, type}) => type === true ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`