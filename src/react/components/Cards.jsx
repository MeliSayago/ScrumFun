import React from 'react'
import cardList from '../Card/CardList'
import './Cards.css'
import Card from './Card'

const Cards = ({users, handleClick}) => (

    <div className="xop-caption">
        <ul className="xop-grid ">
            {cardList.map((card, index) => (
                <li key={index}>
                    <Card className='xop-box xop-img'>
                        <img src={card.img} alt="DB"/>
                        {users.map(user => (
                            <div>
                                <h1 key={user.id} 
                                    onClick={()=>handleClick(user.id, card.points)}>
                                    {card.points}
                                </h1>
                                <h2 className='font'>{card.points}</h2>
                            </div>
                        ))}
                    </Card>
                </li>
            ))}
        </ul> 
    </div>
)

export default Cards