import styled from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled.View`
    /* flex: 1; */
    background-color: white;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 28px;
`
export const Logo = styled.Image`
    width: 82px;
    height: 37px;
`
export const Avatar = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border-width: 2px;
    border-color: #323537;
`