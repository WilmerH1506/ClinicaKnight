import React from 'react';
import { FaEdit, FaTrashAlt, FaPlus } from 'react-icons/fa';
import './Dates.css';

const DatesData = [
  { Fecha: '08/10/2024', Hora: '5:00', Paciente: 'Carlitos Montoya', Tratamiento: 'Extracción de muela' },
  { Fecha: '09/10/2024', Hora: '5:00', Paciente: 'Wilmer Hernández', Tratamiento: 'Limpieza' },
];

const Dates = () => {
  return (
    <div className="dates-container">
      <div className="header">
        <h1>Citas</h1>
        <button className="new-date-button">
          <FaPlus className="plus-icon" /> Nueva Cita
        </button>
      </div>
      
      <div className="dates-table">
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Paciente</th>
              <th>Tratamiento</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {DatesData.map((date, index) => (
              <tr key={index}>
                <td>{date.Fecha}</td>
                <td>{date.Hora}</td>
                <td>{date.Paciente}</td>
                <td>{date.Tratamiento}</td>
                <td className="action-buttons">
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

export default Dates;
