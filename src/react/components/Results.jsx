import React from 'react'
import { Grid,Row,Col,Image } from 'react-bootstrap';
import cardList from '../Card/CardList'
import './Results.css'

export default (users) => (
    <div>
        <h1>Results</h1>
        <div className="xop-caption">
            <ul className="xop-grid">
                {users.users.map((user, index) => (
                    <li key={index}>
                        <button className='xop-box xop-img'>
                        <h3>{user.card}</h3>
                        </button>
                        <h4>{user.name}</h4>
                    </li>
                ))}
            </ul> 
        </div>
    </div>
)