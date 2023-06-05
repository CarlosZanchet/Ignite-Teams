import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { groupGetAll } from "./groupsGetAll";

export async function groupRemoveByName(groupDeleted: string) {
  try {
   
    const storedGroups = await groupGetAll()

    const groups = storedGroups.filter(group => group !== groupDeleted);

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));

    await AsyncStorage.removeItem(`${GROUP_COLLECTION}-${groupDeleted}`);

  } catch (err) {
    throw err
  }
}