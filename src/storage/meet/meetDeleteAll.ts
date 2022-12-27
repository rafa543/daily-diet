import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEET_COLLECTION } from "@storage/storageConfig";

type Props = {
    nome: string,
    description: string,
    data: string,
    hour: string,
    diet: string
}

export async function meetsDeleteAll() {
    try {
        const storage = await AsyncStorage.removeItem(MEET_COLLECTION)

    } catch (error) {
        console.log(error)
        throw error
    }
}