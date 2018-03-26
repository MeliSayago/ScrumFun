import React from 'react'
import './Cards.css'

class CardsContainer extends React.Component {

render(){
    return(
        <div className="xop-caption">
            <ul class="xop-grid">
                <li>
                    <div className='xop-box xop-img'>
                        <h1>0</h1>
                    </div>
                </li>
                <li>
                    <div className='xop-box xop-img'>
                        <h1>1/2</h1>
                    </div>
                </li>
                <li>
                    <div className='xop-box xop-img'>
                        <h1>1</h1>
                    </div>
                </li>
                <li>
                    <div className='xop-box xop-img'>
                        <h1>2</h1>
                    </div>
                </li>
                <li>
                    <div className='xop-box xop-img'>
                        <h1>3</h1>
                    </div>
                </li>
                <li>
                    <div className='xop-box xop-img'>
                        <h1>5</h1>
                    </div>
                </li>
                <li>
                    <div className='xop-box xop-img'>
                        <h1>8</h1>
                    </div>
                </li>
                <li>
                    <div className='xop-box xop-img'>
                        <h1>13</h1>
                    </div>
                </li>
                <li>
                    <div className='xop-box xop-img'>
                        <h1>20</h1>
                    </div>
                </li>
                <li>
                    <div className='xop-box xop-img'>
                        <h1>40</h1>
                    </div>
                </li>
                <li>
                    <div className='xop-box xop-img'>
                        <h1>100</h1>
                    </div>
                </li>
                <li>
                    <div className='xop-box xop-img'>
                        <h1>?</h1>
                    </div>
                </li>
                <li>
                    <div className='xop-box xop-img'>
                        <h1>&infin;</h1>
                    </div>
                </li>
            </ul>
        </div>
    )
}

}

export default CardsContainer