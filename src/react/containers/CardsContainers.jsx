import React from 'react'
import './Cards.css'

class CardsContainer extends React.Component {

render(){
    return(
        <div className="xop-caption">
            <ul className="xop-grid">
                <li>
                    <div className='xop-box xop-img'>
                        <h1>0</h1>
                    </div>
                </li>
                {/* <li>
                    <div className='xop-box xop-img'>
                        <h1>1/2</h1>
                    </div>
                </li>
                <li>
                    <div className='xop-box xop-img'>
                        <h1>1</h1>
                    </div>
                </li> */}
            </ul>
        </div>
    )
}

}

export default CardsContainer