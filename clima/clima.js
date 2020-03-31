const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=dda559b73e471638b2d3fb4f7efff336&units=metric`)

    if (Error == true) {
        throw TypeError(`A error ocurred`);
    }

    return resp.data.main.temp;
}

module.exports = {
    getClima
}