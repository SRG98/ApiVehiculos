const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

const app = express();
const port = config.get("port");
const jsonParser = bodyParser.json();
const urlEncodeParser = bodyParser.urlencoded({
    extended: true
}
);

app.use(jsonParser);
app.use(urlEncodeParser);

app.get("/", (req, res, next) => {
    res.send("Welcome the api vehicles")
})

const vehicleRoute = require("./routes/vehicle.routes");
vehicleRoute(app);

app.listen(port, () => {
    console.log("Server is running...")
});