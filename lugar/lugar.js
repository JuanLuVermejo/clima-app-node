const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://geocode.xyz/${ encodedUrl }?json=1`
    });

    const resp = await instance.get();

    if (resp.data.matches === null) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const { standard, latt: lat, longt: lng } = resp.data;

    let direccion = '';

    if (standard.addresst.length > 0) {
        direccion = `${standard.addresst}, ${standard.countryname}`;
    } else {
        direccion = `${standard.city}, ${standard.countryname}`;
    }

    return {
        direccion,
        lat,
        lng
    };
};

module.exports = {
    getLugarLatLng
}