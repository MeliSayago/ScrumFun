import React from 'react'
import './Cards.css'
import Card from './Card'

const Cards = ({users, handleClick, CardList}) => (

    <div className="xop-caption">
        <ul className="xop-grid ">
            {CardList.map((card) => (
                <li key={card.id}>
                    {users.map(user => (
                        <button key={user.id} className='xop-box xop-img'  
                            onClick={()=>handleClick(user.id, card.points)}>
                            <img src={card.img} alt="Cards"/>
                            <h1>{card.points}</h1>
                            <h2 className='font'>{card.points}</h2>
                        </button>
                    ))}
                </li>
            ))}
        </ul> 
    </div>
)

export default Cards