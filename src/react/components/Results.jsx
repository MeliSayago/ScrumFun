import React from 'react'
import { Grid,Row,Col,Image } from 'react-bootstrap';
import {FibonacciCards} from '../Card/CardList'
import './Cards.css'

export default (users) => (
    // <div >
    //     <h1 className="text-center" >Results</h1>
    //     <div className="xop-caption">
    //         <ul className="xop-grid">
    //             {users.users.map((user, index) => (
    //                 <li key={index}>
    //                     <button className='xop-box xop-img'>
    //                     <h1>{user.card}</h1>
    //                     </button>
    //                     <h5>{user.name}</h5>
    //                 </li>
    //             ))}
    //         </ul> 
    //     </div>
    // </div>
    <div>
        {users.users.forEach(user => {
            console.log("user",user)
            FibonacciCards.map(card => {
                if(user.card === card.points){
                    console.log("card",card)
                    return <div>name:{user.name} card:{user.card}</div>
                }else{return (<h1>cheto</h1>)}
            })        
        })
        }
    </div>
)