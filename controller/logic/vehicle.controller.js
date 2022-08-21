const vehicleDto = require("../../model/dto/vehicle.dto");
const config = require("config");

exports.createVehicle = (req, res, next) => {
    let veh = {
        pais_registrado: req.body.pais_registrado,
        marca: req.body.marca,
        modelo: req.body.modelo,
        año_modelo: req.body.año_modelo,
        placa: req.body.placa,
        propietario: req.body.propietario,
        color: req.body.color,
        capacidad: req.body.capacidad,
        tipo_Combustible: req.body.tipo_Combustible,
        tipo: req.body.tipo,
        valor: req.body.valor,
        kilometraje: req.body.kilometraje,
        servicio: req.body.servicio
    };

    vehicleDto.create(veh, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );
    })
};

exports.getAll = (req, res, next) => {
    vehicleDto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );

        }
        res.status(200).json(
            { info: data }
        );
    });
};

exports.getByMarca = (req, res, next) => {
    vehicleDto.getByMarca({ marca: req.params.marca }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );
    });
};

exports.getByAño = (req, res, next) => {
    vehicleDto.getByAño({ año_modelo: req.params.año_modelo }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );
    });
};

exports.getByColor = (req, res, next) => {
    vehicleDto.getByColor({ color: req.params.color }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );
    });
};