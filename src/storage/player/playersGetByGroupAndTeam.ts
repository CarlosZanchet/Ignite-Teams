import AsyncStorage from "@react-native-async-storage/async-storage"
import { PLAYER_COLLECTION } from "@storage/storageConfig"
import { playerGetByGroup } from "./playersGetByGroup";
import { PlayerStorageDTO } from "./PlayerStorageDTO"

export async function playersGetByGroupAndTeam(group: string, team: string) {
  try {
    const storage = await playerGetByGroup(group)

    const players: PlayerStorageDTO[] = await storage.filter(player => player.team === team);
   
    return players;

  } catch (err) {
    throw err
  }
}