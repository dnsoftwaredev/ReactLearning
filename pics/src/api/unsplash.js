import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID FSG15rWvFycl_Izlp0rilxTfjd2Cy7fmkvuAHQVSfzU'
    }
});