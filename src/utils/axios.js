import { BASE_URL } from "../../server/config/env.config";

export const fetchFromAPI = async (method, task = '') => {
    
    
    return (await axios.method(BASE_URL, task));


}