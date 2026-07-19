import { serverMutation } from "../core/server"

export const createPetData = async(newPetData)=>{
    return serverMutation('/api/pets', newPetData)
}