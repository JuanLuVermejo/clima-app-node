const { argv } = require('./config/yargs');
const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');


const getInfo = async(dir) => {

    try {
        const { direccion, lat, lng } = await getLugarLatLng(dir);
        const temp = await getClima(lat, lng);
        return `El clima de ${direccion} es de ${ temp }ºC.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${dir}.`;
    }
};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);