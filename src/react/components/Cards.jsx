import React from 'react'
import './Cards.css'
import { Grid, Row, Col } from 'react-bootstrap'

const Cards = ({handleClick, CardList}) => (
    <div className="xop-caption">
        <ul className="xop-grid ">
            {CardList.map((card) => (
                <li key={card.points}>
                    <button className='xop-box xop-img'>
                        <img onClick={()=>handleClick(card.points)} src={card.img} alt="DB"/>
                            <div>
                                <h1>{card.points}</h1>
                                <h3>{card.size}</h3>
                                <h2 className='font'>{card.points}</h2>
                            </div>
                    </button>
                </li>
            ))}
        </ul> 
    </div>
)

export default Cards


// const Cards = ({handleClick, CardList}) => (
//     <Grid>
//         <div className="xop-caption">
//             <Row className="show-grid">
//                 {CardList.map((card) => (
//                     <Col md={4} sm={4} xs={4}>
//                         <button className='xop-box xop-img'>
//                             <img onClick={()=>handleClick(card.points)} src={card.img} alt="DB"/>
//                                 <div>
//                                     <h1>{card.points}</h1>
//                                     <h2 className='font'>{card.points}</h2>
//                                 </div>
//                         </button>
//                     </Col>
//                 ))}
//             </Row> 
//         </div>
//     </Grid>
// )