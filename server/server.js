const path = require('path');
const express = require('express');
const app = express();


app.use(express.static());



app.listen(3000, () => {
    console.log('Server is up!');
});