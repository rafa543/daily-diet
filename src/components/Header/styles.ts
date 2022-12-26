import styled from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeft } from "phosphor-react-native";

export const Container = styled(SafeAreaView)`
    height: 80px;
    background-color: ${({theme}) => theme.COLORS.GRAY_500};;
    flex-direction: row;
    align-items: center;
    padding-left: 24px;
    padding-right: 24px;
    margin-bottom: 20px;
`
export const Title = styled.Text`
    margin-left: 90px;
    font-size: 18px;
    font-weight: bold;
`

export const BackButton = styled.TouchableOpacity`
`

export const BackIcon = styled(ArrowLeft).attrs(({theme}) => ({
    size: 32,
    color: theme.COLORS.GRAY_200,
}))`
`