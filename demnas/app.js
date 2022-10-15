const express = require('express');
const app = express();
const port=3021;
const {obj}=require('./example.json');
//const htmlindex=require('./index.html');



app.get('/', (req, res) => {
    res.send(obj.type)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})