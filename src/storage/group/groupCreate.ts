import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { groupGetAll } from "./groupsGetAll";

export async function groupCreate(newGroup: string) {
  try {
    const groups = await groupGetAll()

    const groupAlreadyExist = groups.includes(newGroup)

    if(groupAlreadyExist) {
      throw new AppError(`Grupo ${newGroup} já cadastrado`)
    }

    const storage = JSON.stringify([...groups, newGroup])

    await AsyncStorage.setItem(GROUP_COLLECTION, storage);

  } catch (err) {
    throw err
  }
}