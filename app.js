const express = require('express');
const app = express();
app.get('/', (req,res) => {res.send('<p>Home</p><a href="/info">see page info</a>')});
app.get('/info', (req,res) => {res.send('<p>Page Info</p><a href="/">back home</a>')});
app.listen(process.env.PORT || 3000);