import { serverFetch, serverMutation } from "../core/server"

export const createPetData = async(newPetData)=>{
    return serverMutation('/api/pets', newPetData)
}

export const getAllPets = async()=>{
    return serverFetch("/api/pets");
}
export const getSinglePet = async (id) => {
    return serverFetch(`/api/pets/${id}`);
}