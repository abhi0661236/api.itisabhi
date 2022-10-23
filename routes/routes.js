import express from "express";
import {createAdmin, getAdmin, greet} from '../controllers/adminController.js';

const router = express.Router();

router.post('/createadmin', createAdmin);
router.get('/:username', getAdmin);
router.get("/", greet)


export default router;