const mongoose = require("mongoose");
const db = require("../db-connection/mongodb");

const schema = require("../schemas/vehicles.shema");
db();

schema.statics = {
    create: function (data, cb) {
        let doc = new this(data);
        doc.save(cb);
    },

    getAll: function (query, cb) {
        this.find(query, cb);
    },

    getByMarca: function (query, cb) {
        this.find(query, cb)
    },

    getByAño: function (query, cb) {
        this.find(query, cb)
    },

    getByColor: function (query, cb) {
        this.find(query, cb)
    }
};

const dto = mongoose.model("coll-vehicle", schema);
module.exports = dto;