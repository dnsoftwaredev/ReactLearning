import axios from 'axios';

const KEY = 'AIzaSyDmNNk4hww55Z_wGBZAWqETO_yPybryu0E';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});