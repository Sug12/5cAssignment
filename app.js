const express = require('express');

const app = new express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/github', require('./routes/github.route'));

app.use('/', (req, res) => {
    res.status(200).send({message: 'App started successfully'});
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log("APP RUNNING ON PORT", port);
});