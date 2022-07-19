const express = require('express');
const app = express();
const path = __dirname + '/www';

app.get('', (req,res) => res.send('<a href="./battle">BATTLE</a>'));
app.get('/battle', (req,res) => res.send('<a href="./">HOME</a>'));

app.get('/index', (req,res) => res.sendFile(path + '/index.html'));

app.listen(process.env.PORt || 3000);