const express = require('express')
const {registration,login}=require('../controllers/user')


const router = express.Router();

router.post('/',registration)
router.post('/login',login)



module.exports=router;