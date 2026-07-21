import { serverFetch, serverMutation } from "../core/server"
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
export const createPetData = async(newPetData)=>{
    return serverMutation('/api/pets', newPetData)
}

export const getAllPets = async()=>{
    return serverFetch("/api/pets");
}
export const getSinglePet = async (id) => {
    return serverFetch(`/api/pets/${id}`);
}

export const updatePetData = async (id, updatedPetData) => {
    return serverMutation(`/api/pets/${id}`, updatedPetData, 'PUT');
};

export const deletePetData = async (id) => {
    return serverMutation(`/api/pets/${id}`, null, 'DELETE');
};