import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEET_COLLECTION } from "@storage/storageConfig";

export async function meetCreate(newMeetName: string) {
    try{
        await AsyncStorage.setItem(MEET_COLLECTION, JSON.stringify(newMeetName))
    }catch(error) {
        throw error
    }
}