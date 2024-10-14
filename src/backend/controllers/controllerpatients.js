import Patient from '../models/patient.js';


export const patients = async (req, res) => {
    try {
        const allPatients = await Patient.find();
        res.status(200).json(allPatients);

    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const registerpatients = async (req, res) => {
    
    const {Nombre,DNI,Telefono,Correo} = req.body;

    const newPatient = new Patient({Nombre,DNI,Telefono,Correo});

    try {
        await newPatient.save();
        res.status(201).json(newPatient);

    } catch (error) {
        res.status(409).json({message: error.message});
    }
}