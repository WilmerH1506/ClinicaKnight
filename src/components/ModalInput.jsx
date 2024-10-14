import React from 'react';
import './Modal.css'; // Asegúrate de que esto apunte al archivo de estilos correcto.

const Modal = ({ isOpen, onClose, inputs, title, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form onSubmit={onSubmit}>
          {inputs.map((input, index) => (
            <div key={index} className="form-group">
              <label>{input.label}</label>
              <input
                type={input.type || "text"}
                name={input.name}
                placeholder={input.placeholder || ""}
                onChange={input.onChange}
                value={input.value || ""}
              />
            </div>
          ))}
          <div className="modal-footer">
            <button type="submit" className="submit-button">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;