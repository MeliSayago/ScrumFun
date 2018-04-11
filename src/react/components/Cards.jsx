import React from 'react'
import './Cards.css'

const Cards = ({handleClick, CardList}) => (
    <div className="xop-caption">
        <ul className="xop-grid ">
            {CardList.map((card) => (
                <li key={card.points}>
                    <button className='xop-box xop-img'>
                        <img onClick={()=>handleClick(card)} src={card.img} alt="DB"/>
                            <div>
                                <h3>{card.size}</h3>
                            </div>
                    </button>
                </li>
            ))}
        </ul> 
    </div>
)

export default Cards