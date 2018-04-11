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
  <div className="text-center">
    <form  onSubmit={onSubmit}>
      <FormGroup>
        <ControlLabel>
          <h1>Create Session</h1>
        </ControlLabel>
        <div className="form-signin">
        <FormControl
          type="text"
          onChange={onChange}
          name="boardName"
          placeholder="Board name"
        />
        </div>
        <h3>Choose a theme</h3>
        <div className="d-flex justify-content-center">
          <Row className="show-grid">
            <Col xs={6}>
              <div className='xop-box xop-image-1' onClick={()=>handleClick('fibonacci')}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzjJHWF6sZPsoCnjERWwdqtFnrim8PcfseidDCRMyZQAVHeGo' 
                alt='fibonacci'/>
              </div>
            </Col>
            <Col xs={6}>
              <div className='max xop-box xop-image-1' onClick={()=>handleClick('dragonBall')}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSQtXj9Cmr8-21775y3LrQNOkCbJX9e8czjPTQ3pgbyg7Wkb-W' 
                alt='dragon ball'/>
              </div>
            </Col>
            <Col xs={6}>
              <div className=' max xop-box xop-image-1' onClick={()=>handleClick('simpsons')}>
                <img src='https://ia.media-imdb.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg' 
                alt="simpsons"/>
              </div>
            </Col>
            <Col xs={6}>
              <div className=' max xop-box xop-image-1' onClick={()=>handleClick('shirts')}>
                <img src='https://www.scrumdesk.com/wp-content/uploads/XL.jpg' 
                alt='shirts'/>
              </div>
            </Col>
          </Row>
        </div>
        <br/>
        <button className="btn-signin btn btn-lg btn-primary btn-block" type="submit">
          Create Session
        </button>
      </FormGroup>
    </form>
  </div>
);
