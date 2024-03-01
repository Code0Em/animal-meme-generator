// imports
import { catApiUrl, dogApiUrl } from './constraints';

// exports
export const fetchAnimalApi = async (animalType) => {
    const apiUrl = animalType === 'cat' ? catApiUrl : dogApiUrl;
    const response = await fetch(apiUrl);
    return response;
};