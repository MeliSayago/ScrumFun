import React from 'react'
import './Cards.css'
import Card from './Card'

const Cards = ({handleClick, CardList}) => (
    <div className="xop-caption">
        <ul className="xop-grid ">
            {CardList.map((card) => (
                <li key={card.points}>
                    <button className='xop-box xop-img'>
                        <img onClick={()=>handleClick(card.points)} src={card.img} alt="DB"/>
                            <div>
                                <h1>{card.points}</h1>
                                <h2 className='font'>{card.points}</h2>
                            </div>
                    </button>
                </li>
            ))}
        </ul> 
    </div>
)

export default Cards