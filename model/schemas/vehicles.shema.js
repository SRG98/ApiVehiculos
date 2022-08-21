const moongose = require("mongoose");
const validator = require("mongoose-unique-validator")

const vehicleSchema = new moongose.Schema({

    pais_registrado: {
        type: "String",
        required: true,
    },

    marca: {
        type: "String",
        required: true,
    },

    modelo: {
        type: "String",
        required: true,
    },

    año_modelo: {
        type: "Number",
        required: true,
    },

    placa: {
        type: "String",
        required: true,
        unique: true,
    },

    propietario: {
        type: "String",
        required: true,
    },

    color: {
        type: "String",
        required: true,
    },

    capacidad: {
        type: "Number",
        required: true,
    },

    tipo_Combustible: {
        type: "String",
        required: true,
    },

    tipo: {
        type: "String",
        required: true,
    },

    valor: {
        type: "Number",
        required: true,
    },

    kilometraje: {
        type: "Number",
        required: true,
    },

    servicio: {
        type: "Boolean",
        required: true,
    },
})

vehicleSchema.plugin(validator);
module.exports = vehicleSchema;