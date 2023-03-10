import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEET_COLLECTION } from "@storage/storageConfig";

export type PropsMeets = {
    nome: string,
    description: string,
    data: string,
    hour: string,
    diet: string
}

export async function meetsGetAll() {
    try {
        const storage = await AsyncStorage.getItem(MEET_COLLECTION)
        // const meets: PropsMeets[] = storage ? JSON.parse(storage) : []
        const meets = storage ? JSON.parse(storage) : []

        return meets
    } catch (error) {
        console.log(error)
        throw error
    }
}