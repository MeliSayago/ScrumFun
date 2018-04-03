import React from 'react'
import './Cards.css'
import Card from './Card'

<<<<<<< HEAD
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
=======
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
>>>>>>> c92043949506a9f0aedadefec0f703f55fa5f4a2
                </li>
            ))}
        </ul> 
    </div>
)

export default Cards