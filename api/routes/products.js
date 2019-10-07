const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) =>{
    res.status(200).json({
        message:'Handling get request from products'
    });
});

router.post('/',(req,res,next) =>{
    res.status(200).json({
        message:'Handling post request from products'
    });
});

module.exports = router;