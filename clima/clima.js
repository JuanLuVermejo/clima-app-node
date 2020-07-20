const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=ee2ff1fd895d05e4d973c4e96da43845&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}