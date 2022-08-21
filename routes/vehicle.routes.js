const controller = require("../controller/logic/vehicle.controller");

module.exports = (app) => {

    app.get("/vehicle", (req, res, next) => {
        controller.getAll(req, res, next);
    });

    app.get("/vehicle/bymarca/:marca", (req, res, next) => {
        console.log("Buscando vehiculos por marca")
        controller.getByMarca(req, res, next);
    });

    app.get("/vehicle/byaño_modelo/:año_modelo", (req, res, next) => {
        console.log("Buscando vehiculos por año de modelo")
        controller.getByAño(req, res, next);
    });

    app.get("/vehicle/bycolor/:color", (req, res, next) => {
        console.log("Buscando vehiculos por color")
        controller.getByColor(req, res, next);
    });

    app.post("/vehicle", (req, res, next) => {
        controller.createVehicle(req, res, next);
    });

};