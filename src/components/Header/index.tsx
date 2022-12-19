import { Container, Logo, Avatar } from "./styles";
import logoImg from '@assets/logo.png'
import avatar from '@assets/user.jpeg'

export default function Header() {
    return (
        <Container>
            <Logo source={logoImg} />
            <Avatar source={avatar} />
        </Container>
    )
}