import {Router} from 'express';
import {patients,registerpatients,deletePatient} from '../controllers/controllerpatients.js';

const router = Router();

router.get('/patients',patients);

router.post('/registerpatients',registerpatients);

router.post('/deletepatient',deletePatient);

export default router;