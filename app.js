const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('hello world this is for test')
});

app.get('/test', (req,res) => {
    res.send('Hi your test is success')
});

app.listen(3000, () => console.log('port is up and running'));