import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEET_COLLECTION } from "@storage/storageConfig";
import { meetsGetAll } from "./meetGetAll";

export async function meetCreate(newMeet: string) {
    try{
        const storageMeets = await meetsGetAll();

        const storage = JSON.stringify([...storageMeets, newMeet])
        await AsyncStorage.setItem(MEET_COLLECTION, storage)
    }catch(error) {
        throw error
    }
}