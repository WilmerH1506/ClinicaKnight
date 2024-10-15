import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrashAlt, FaPlus } from 'react-icons/fa';
import Modal from './ModalInput';
import ConfirmationModal from './confirmModal'; 
import { getPatients, registerPatients, deletePatient } from "../api/api.js"; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import './Patients.css';

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false); 
  const [modalTitle, setModalTitle] = useState('');
  const [currentPatient, setCurrentPatient] = useState({ Nombre: '', DNI: '', Telefono: '', Correo: '' });
  const [patientToDelete, setPatientToDelete] = useState(null); 

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await getPatients();
        setPatients(response);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  const openModal = (patient = null) => {
    if (patient) {
      setModalTitle('Editar Paciente');
      setCurrentPatient(patient);
    } else {
      setModalTitle('Paciente Nuevo');
      setCurrentPatient({ Nombre: '', DNI: '', Telefono: '', Correo: '' });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openConfirmation = (id) => {
    setPatientToDelete(id); 
    setIsConfirmationOpen(true); 
  };

  const closeConfirmation = () => {
    setIsConfirmationOpen(false);
    setPatientToDelete(null); 
  };

  const handleDelete = async () => {
    try {
      await deletePatient(patientToDelete); 
      setPatients(patients.filter(p => p._id !== patientToDelete)); 
      toast.success('Paciente eliminado con éxito!');
      closeConfirmation(); 
    } catch (error) {
      console.error('Error deleting patient:', error);
      toast.error('Error al eliminar el paciente.');
    }
  };

  const handleSubmit = async (data) => {
    try {
      const newPatient = await registerPatients(data);
      setPatients([...patients, newPatient]);
      toast.success('Paciente agregado con éxito!'); 
      closeModal(); 
    } catch (error) {
      console.error('Error registering patient:', error);
      toast.error('Error al agregar el paciente.'); 
    }
  };

  const inputs = [
    {
      label: 'Nombre',
      name: 'Nombre',
      placeholder: 'Ingrese el nombre',
    },
    {
      label: 'DNI',
      name: 'DNI',
      placeholder: 'Ingrese el DNI',
    },
    {
      label: 'Teléfono',
      name: 'Telefono',
      placeholder: 'Ingrese el teléfono',
    },
    {
      label: 'Correo',
      name: 'Correo',
      type: 'email',
      placeholder: 'Ingrese el correo',
    },
  ];

  return (
    <div className="patients-container">
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={true} />
      <div className="header">
        <h1>Pacientes</h1>
        <button className="new-patient-button" onClick={() => openModal()}>
          <FaPlus className="plus-icon" /> Paciente Nuevo
        </button>
      </div>

      <div className="patients-table">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>DNI</th>
              <th>Teléfono</th>
              <th>Correo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient._id}>
                <td>{patient.Nombre}</td>
                <td>{patient.DNI}</td>
                <td>{patient.Telefono}</td>
                <td>{patient.Correo}</td>
                <td>
                  <button className="edit-button" onClick={() => openModal(patient)}>
                    <FaEdit /> Editar
                  </button>
                  <button 
                    className="delete-button" 
                    onClick={() => openConfirmation(patient._id)} 
                  >
                    <FaTrashAlt /> Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal para agregar/editar pacientes */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        inputs={inputs}
        title={modalTitle}
        onSubmit={handleSubmit} 
      />

      {/* Modal de confirmación */}
      <ConfirmationModal 
        isOpen={isConfirmationOpen} 
        onClose={closeConfirmation} 
        onConfirm={handleDelete} 
      />
    </div>
  );
};

export default Patients;
