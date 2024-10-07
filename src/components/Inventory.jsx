import React from 'react';
import { FaEdit, FaTrashAlt, FaPlus } from 'react-icons/fa';
import './Inventory.css';

const InventoryData = [
  { Producto: 'Pasta Dental', Cantidad: 15, Precio: 50 + 'Lps' },
  { Producto: 'Cepillo', Cantidad:  30, Precio: 30 + 'Lps' },
];

const Inventory = () => {
  return (
    <div className="inventory-container">
      <div className="header">
        <h1>Inventario</h1>
        <button className="new-product-button">
          <FaPlus className="plus-icon" /> Producto Nuevo
        </button>
      </div>
      
      <div className="inventory-table">
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {InventoryData.map((Inventory) => (
              <tr key={Inventory.Producto}>
                <td>{Inventory.Producto}</td>
                <td>{Inventory.Cantidad}</td>
                <td>{Inventory.Precio}</td>
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

export default Inventory;
