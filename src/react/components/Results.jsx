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
              <img src={user.card.img} alt="card"/>
            </button>
            <h5>{user.name}</h5>
          </li>
        ))}
        {scrumMaster.map((sm) => (
          <li key={sm.id}>
            <button className="xop-box xop-img">
              <img src={sm.card.img} alt="card"/>
              <div>
                <h3>{sm.card.size}</h3>
              </div>
            </button>
            <h5>{sm.name}</h5>
          </li>
        ))}
      </ul>
    </div>

  </div>
);
