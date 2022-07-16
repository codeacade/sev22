const express = require('express');
const path = require("path");
const publicPath = path.join(__dirname + '/public');
const app = express();

app.use(express.static(publicPath));

app.get("/", (req, res) => {
	res.sendFile(publicPath + "/index.html");
});

app.get("/battle", (req, res) => {
	res.sendFile(publicPath + "/battle.html");
});

app.listen(process.env.PORT || 3000);
