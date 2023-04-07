const { Router } = require('express');
//const authController = require('../controllers/auth');
const router = Router();
const auth = require('../middleware/auth');

const {
    signup,
    login,
    get_user
    
    
} = require("../controllers/employeeauth");


router.post('/register',signup);
router.post('/login', login)
router.get('/employee', auth,get_user);

module.exports = router;