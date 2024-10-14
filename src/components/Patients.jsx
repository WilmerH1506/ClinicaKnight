import React, { useState } from 'react';
import { FaEdit, FaTrashAlt, FaPlus } from 'react-icons/fa';
import Modal from './ModalInput'; 
import './Patients.css';

const initialPatientsData = [
  { id: 1, name: 'Juan Pérez', DNI: '123456', phone: '555-1234', email: 'juan@example.com' },
  { id: 2, name: 'María García', DNI: '123456', phone: '555-5678', email: 'maria@example.com' },
  { id: 3, name: 'Pedro Martínez', DNI: '123456', phone: '555-8765', email: 'pedro@example.com' },
  { id: 4, name: 'Ana López', DNI: '123456', phone: '555-4321', email: 'ana@example.com' },
  { id: 5, name: 'Carlos Rivera', DNI: '123456', phone: '555-5678', email: 'carlos@example.com' },
];

const Patients = () => {
  const [patients, setPatients] = useState(initialPatientsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [currentPatient, setCurrentPatient] = useState({ id: null, name: '', DNI: '', phone: '', email: '' });

  const handleInputChange = (e) => {
    setCurrentPatient({ ...currentPatient, [e.target.name]: e.target.value });
  };

  const openModal = (patient = null) => {
    if (patient) {
      setModalTitle('Editar Paciente');
      setCurrentPatient(patient);
    } else {
      setModalTitle('Paciente Nuevo');
      setCurrentPatient({ id: null, name: '', DNI: '', phone: '', email: '' });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentPatient.id) {
      // Editar paciente existente
      setPatients(
        patients.map((patient) => (patient.id === currentPatient.id ? currentPatient : patient))
      );
    } else {
      // Agregar nuevo paciente
      setPatients([...patients, { ...currentPatient, id: patients.length + 1 }]);
    }
    closeModal();
  };

  const inputs = [
    {
      label: 'Nombre',
      name: 'name',
      value: currentPatient.name,
      onChange: handleInputChange,
      placeholder: 'Ingrese el nombre',
    },
    {
      label: 'DNI',
      name: 'DNI',
      value: currentPatient.DNI,
      onChange: handleInputChange,
      placeholder: 'Ingrese el DNI',
    },
    {
      label: 'Teléfono',
      name: 'phone',
      value: currentPatient.phone,
      onChange: handleInputChange,
      placeholder: 'Ingrese el teléfono',
    },
    {
      label: 'Correo',
      name: 'email',
      type: 'email',
      value: currentPatient.email,
      onChange: handleInputChange,
      placeholder: 'Ingrese el correo',
    },
  ];

  return (
    <div className="patients-container">
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
              <tr key={patient.id}>
                <td>{patient.name}</td>
                <td>{patient.DNI}</td>
                <td>{patient.phone}</td>
                <td>{patient.email}</td>
                <td>
                  <button className="edit-button" onClick={() => openModal(patient)}>
                    <FaEdit /> Editar
                  </button>
                  <button className="delete-button" onClick={() => setPatients(patients.filter(p => p.id !== patient.id))}>
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
      />
    </div>
  );
};

export default Patients;
