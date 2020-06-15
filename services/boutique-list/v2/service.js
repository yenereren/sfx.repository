const axios = require('axios');


const service = async () => {
    const requestUrl = "https://my-json-server.typicode.com/yenereren/sfx.fakeapi/homepage"
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