import React from 'react';
import { Link } from 'react-router-dom';
import {
  FormControl,
  FormGroup,
  ControlLabel,
  Grid,
  Row,
  Col,
  Thumbnail,
  Button,
  Checkbox,
} from 'react-bootstrap';
import './CreateSession.css'

export default ({ onChange, onSubmit, handleClick }) => (
  <div className="container">
    <form onSubmit={onSubmit}>
      <FormGroup>
        <ControlLabel>
          <h1>Create Session</h1>
        </ControlLabel>
        <FormControl
          type="text"
          onChange={onChange}
          name="boardName"
          placeholder="Enter text"
        />
        <div className='xop-section'>
          <ul className='xop-grid'>
            <li>
                <div className='xop-box xop-image-1' onClick={()=>handleClick('fibonacci')}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzjJHWF6sZPsoCnjERWwdqtFnrim8PcfseidDCRMyZQAVHeGo' 
                alt='fibonacci'/>
                </div>
            </li>
            <li>
                <div className='xop-box xop-image-2' onClick={()=>handleClick('dragonBall')}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSQtXj9Cmr8-21775y3LrQNOkCbJX9e8czjPTQ3pgbyg7Wkb-W' 
                alt='dragon ball'/>
                </div>
            </li>
            <li>
                <div className='xop-box xop-image-3' onClick={()=>handleClick('simpsons')}>
                <img src='https://ia.media-imdb.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg' 
                alt="simpsons"/>
                </div>
            </li>
          </ul>
        </div>  
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Create Session
        </button>
      </FormGroup>
    </form>
  </div>
);
