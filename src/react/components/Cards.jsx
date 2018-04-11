<<<<<<< HEAD
import React from 'react'
import './Cards.css'
=======
import React from 'react';
import './Cards.css';
>>>>>>> 48c2b2223d2fb230ea6d54798cd25298208f1b74

const Cards = ({ handleClick, CardList }) => (
  <div className="xop-caption">
    <ul className="xop-grid ">
      {CardList.map(card => (
        <li key={card.points}>
          <button className="xop-box xop-img">
            <img onClick={() => handleClick(card)} src={card.img} alt="DB" />
            <div>
              <h3>{card.size}</h3>
            </div>
          </button>
        </li>
      ))}
    </ul>
  </div>
);

<<<<<<< HEAD
export default Cards
=======
export default Cards;
>>>>>>> 48c2b2223d2fb230ea6d54798cd25298208f1b74
