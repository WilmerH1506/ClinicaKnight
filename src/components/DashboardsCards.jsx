import React from 'react';
import { FaUserFriends, FaCalendarAlt, FaMoneyBillWave } from 'react-icons/fa';
import './DashboardsCards.css';

// Crea un arreglo con los datos de las tarjetas

const cards = [
    {
        title: 'Pacientes Totales',
        value: '1,234',
        icon: <FaUserFriends />,
    },
    {
        title: 'Citas Hoy',
        value: '12',
        icon: <FaCalendarAlt />,
    },
    {
        title: 'Ingresos del Mes',
        value: '$15,234',
        icon: <FaMoneyBillWave />,
    },
    ];


const DashboardCards = () => {
    return (
      <div className="dashboard-cards">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-content">
              <span>{card.title}</span>
              <h2>{card.value}</h2>
            </div>
            <div className="card-icon">
              {card.icon}
            </div>
          </div>
        ))}
      </div>
    );
  };

export default DashboardCards;