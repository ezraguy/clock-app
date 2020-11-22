
import axios from 'axios';
import { getLocation } from './location-service';
const getTime = async () => {
    const config = {
        headers: { 'Access-Control-Allow-Origin': '*' }
    };
    const location = await getLocation();
    const ip = location.ip;

    const url = `http://worldtimeapi.org/api/ip/${ip}`
    try {
        const data = await axios.get(url, config.headers);
        return data.data;

    } catch (err) {
        return err;
    }

}

export { getTime };