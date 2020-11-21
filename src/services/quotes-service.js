import axios from 'axios';
const getQuote = async () => {
    const url = 'https://api.quotable.io/random'
    try {
        const data = await axios.get(url);
        return data.data;

    } catch (err) {
        return err;
    }

}

export { getQuote };