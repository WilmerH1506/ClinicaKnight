import React from 'react';
import { FaEdit, FaTrashAlt, FaPlus } from 'react-icons/fa';
import './Patients.css';

const patientsData = [
  { id: 1, name: 'Juan Pérez', phone: '555-1234', email: 'juan@example.com' },
  { id: 2, name: 'María García', phone: '555-5678', email: 'maria@example.com' },
  { id: 3, name: 'Pedro Martínez', phone: '555-8765', email: 'Pedro@example.com' },
  { id: 4, name: 'Ana López', phone: '555-4321', email: 'Ana@example.com' },
  { id: 5, name: 'Carlos Rivera', phone: '555-5678', email: 'Carlos@example.com' },
];

const Patients = () => {
  return (
    <div className="patients-container">
      <div className="header">
        <h1>Pacientes</h1>
        <button className="new-patient-button">
          <FaPlus className="plus-icon" /> Paciente Nuevo
        </button>
      </div>
      
      <div className="patients-table">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Teléfono</th>
              <th>Correo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {patientsData.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.name}</td>
                <td>{patient.phone}</td>
                <td>{patient.email}</td>
                <td>
                  <button className="edit-button">
                    <FaEdit /> Editar
                  </button>
                  <button className="delete-button">
                    <FaTrashAlt /> Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Patients;
