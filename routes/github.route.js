const express = require('express');
const router = express.Router();

const {saveDocuments, getDocumentById} = require('../controllers/github.controller');

router.get('/:id', (req, res) =>{
    getDocumentById(req.params.id)
        .then((result) =>{res.status(200).send(result)})
        .catch((err)=>{res.status(404).send(err.message)})
});

router.post('/', (req, res) =>{
    saveDocuments(req.body.url)
        .then((result) =>{res.status(200).send(result)})
        .catch((err)=>{res.status(404).send(err.message)})
});

module.exports = router;