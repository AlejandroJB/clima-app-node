const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//lugar.getLugarLatLng(argv.direccion).then(console.log);
//
//clima.getClima(18.480000, -69.91000)
//    .then(console.log)
//    .catch(console.log);

// argv.direccion

const getInfo = async(direccion) => {

    try {

        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}.`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}.`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);