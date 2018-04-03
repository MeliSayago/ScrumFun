import React from 'react'
import cardList from '../Card/CardList'
import './Cards.css'
import Card from './Card'

const Cards = ({handleClick}) => (

    <div className="xop-caption">
        <ul className="xop-grid ">
            {cardList.map((card) => (
                <li key={card.points}>
                    <Card className='xop-box xop-img'>
                        <img onClick={()=>handleClick(card.points)} src={card.img} alt="DB"/>
                            <div>
                                <h1>{card.points}</h1>
                                <h2 className='font'>{card.points}</h2>
                            </div>
                    </Card>
                </li>
            ))}
        </ul> 
    </div>
)

export default Cards