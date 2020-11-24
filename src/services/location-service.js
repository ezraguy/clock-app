import axios from 'axios';

const getLocation = async () => {
    const url = 'https://freegeoip.app/json/';
    try {
        const data = await axios.get(url);
        return data.data;

    } catch (err) {
        return err;
    }

}

export { getLocation };