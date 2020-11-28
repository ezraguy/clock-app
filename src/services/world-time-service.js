
import axios from 'axios';
const getTime = async (ip) => {

    const url = `https://worldtimeapi.org/api/ip/${ip}`

    try {
        const data = await axios(url);
        return data.data;

    } catch (err) {
        return err;
    }

}

export { getTime };