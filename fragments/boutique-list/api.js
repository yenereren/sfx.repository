const axios = require('axios');


const service = async () => {
    const requestUrl = "http://localhost:4005/homepage"
    const response = (await axios.get(requestUrl)).data;

    return map(response);
}

const map = (data) => {

    const result = {
        totalItems: data.totalItems,
        totalPages: data.totalPages,
        page: data.page,
        size: data.size,
    }

    return result;
}

module.exports.service = service;