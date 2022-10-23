const express = require("express");
const {createAdmin, getAdmin, greet} = require('../controllers/adminController.js');

const router = express.Router();

router.post('/createadmin', createAdmin);
router.get('/:username', getAdmin);
router.get("/", greet)


module.exports = router;