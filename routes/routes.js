import express from "express";
import {createAdmin, getAdmin} from '../controllers/adminController.js';

const router = express.Router();

router.post('/createadmin', createAdmin);
router.get('/:username', getAdmin);


export default router;