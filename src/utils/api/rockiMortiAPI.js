
import axios from "axios";

const rockiMortiAPI = {
    getCharacters: async (pageUrl) => {
        let response = await axios.get(pageUrl);
        return response;
    },
    getLocation: async (url) => {
        if (url) {
            let response = await axios.get(url)
            return response;
        }

        throw new Error('Invalid location URL');
    }
}

export default rockiMortiAPI;