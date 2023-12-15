const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/',(req,res)=>res.sendFile(path.join(__dirname,'./../views/index.html')));

router.get('/agregar-plato',(req,res)=>res.sendFile(path.join(__dirname,'../views/addDish.html')));

router.get('/buscar-plato',(req,res)=>res.sendFile(path.join(__dirname,'../views/searchDish.html')));

module.exports = router;