import React from 'react'
import cardList from '../Card/CardList'
import './Cards.css'

const Cards = ({users, handleClick}) => (
    <div className="xop-caption">
        <ul className="xop-grid">
            {cardList.map((card, index) => (
                <li key={index}>
                    <button className='xop-box xop-img'>
                        {users.map(user => (
                            <div>

                                <h1 key={user.id} 
                                    onClick={()=>handleClick(user.id, card)}>
                                    {card}
                                </h1>
                                <h2 className='font'>{card}</h2>
                            </div>
                        ))}
                    </button>
                </li>
            ))}
        </ul> 
    </div>
)

export default Cards