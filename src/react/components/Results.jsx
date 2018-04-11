import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import cardList from '../Card/CardList';
import './Cards.css';

export default ({ users, scrumMaster }) => (
  <div>
    <h1 className="text-center">Results</h1>
    <div className="xop-caption">
      <ul className="xop-grid">
        {users.map((user) => (
          <li key={user.id}>
            <button className="xop-box xop-img">
              {user.card ? <img src={user.card.img} alt="" /> : ''}
            </button>
            <h5>{user.name}</h5>
          </li>
        ))}
        {scrumMaster.map((user) => (
          <li key={user.id}>
            <button className="xop-box xop-img">
              {user.card ? <img src={user.card.img} alt="" /> : ''}
            </button>
            <h5>{user.name}</h5>
          </li>
        ))}
      </ul>
    </div>

  </div>
);
