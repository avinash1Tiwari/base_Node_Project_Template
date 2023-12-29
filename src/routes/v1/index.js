

const express = require('express')
const { infoController }  = require('../../controller')

const router = express.Router();

// router.get('/info',(req,res) =>{

//     return res.json({msg : "ok"});
// })


router.get('/info',infoController.info);

module.exports = router;