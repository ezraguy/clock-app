
import axios from 'axios';
const getTime = async (ip) => {

    const url = `https://worldtimeapi.org/api/ip/${ip}`
    const headers = { 'Access-Control-Allow-Origin': '*' };
    try {
        const data = await axios(url, {}, { headers });
        return data.data;

    } catch (err) {
        return err;
    }

}

export { getTime };