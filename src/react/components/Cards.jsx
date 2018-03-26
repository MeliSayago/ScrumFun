import React from 'react'
import cardList from '../Card/CardList'
import './Cards.css'

const Cards = ({users, handleClick, onChange}) => (
    <div className="xop-caption">
        <ul className="xop-grid">
            {cardList.map((card, index) => (
                <li key={index}>
                <div className='xop-box xop-img'>
                {users.map(user => (
                    <h1 key={user.id} onClick={()=>handleClick(user.id, card)} onChange={onChange}>{card}</h1>
                ))}
                </div>
                </li>
            ))}
        </ul> 
    </div>
)

export default Cards