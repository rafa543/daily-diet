import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '@screens/Home'
import Create from '@screens/Create'
import FeedbackScreen from '@screens/FeedbackScreen'


const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="home"
                component={Home}
            />
            <Screen
                name="create"
                component={Create}
            />
            <Screen
                name="feedback"
                component={FeedbackScreen}
            />
        </Navigator>
    )
}