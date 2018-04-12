import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import cardList from '../Card/CardList';
import './Cards.css';

export default ({ users, scrumMaster }) => (
  <div>
    <h1 className="text-center">Results</h1>
    <div className="xop-caption">
      <ul className="xop-grid">
        {users.map((user, index) => (
          <li key={index}>
            <button className="xop-box xop-img">
              {user.card ? <img src={user.card.img} alt="" /> : ''}
            </button>
            <div>
              <h3>{user.card.size}</h3>
            </div>
          </li>
        ))}
        {scrumMaster.map((user, index) => (
          <li key={index}>
            <button className="xop-box xop-img">
              {user.card ? <img src={user.card.img} alt="" /> : ''}
            </button>
            <div>
              <h3>{user.card.size}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
