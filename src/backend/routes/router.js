import {Router} from 'express';
import {patients,registerpatients} from '../controllers/controllerpatients.js';

const router = Router();

router.get('/patients',patients);

router.post('/registerpatients',registerpatients);

export default router;