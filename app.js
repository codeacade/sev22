const express = require('express');
const app = express();
app.get('/', (req,res) => {res.send('<h2>****** Home ******</h2><a href="/info">see page info</a>')});
app.get('/info', (req,res) => {res.send('<h2>****** Page Info ******</h2><a href="/">back home</a>')});
app.listen(process.env.PORT || 3000);
