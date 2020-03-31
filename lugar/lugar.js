const axios = require('axios');


const getLugarLatLng = async(dir) => {
    console.log(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${dir}`,
        timeout: 1000,
        headers: { 'x-rapidapi-key': 'bf254fc56fmshdaa8c1f2dba35dfp1c7966jsnd1ebd3944f1b' }
    });

    const resp = await instance.get()

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }
}


module.exports = {
    getLugarLatLng
}