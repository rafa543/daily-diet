import { TouchableOpacityProps } from "react-native";
import {MaterialIcons} from '@expo/vector-icons'
import { ButtonIconTypeStyleProps, Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps & {
    title: string
    icon: keyof typeof MaterialIcons.glyphMap
    type?: ButtonIconTypeStyleProps 
}


export function ButtonIcon ({title, type = 'NEW', icon, ...rest }: Props) {
    return (
        <Container type={type} {...rest}>
            <Icon name={icon} type={type}/>
            <Title type={type}>{title}</Title>
        </Container>
    )
}