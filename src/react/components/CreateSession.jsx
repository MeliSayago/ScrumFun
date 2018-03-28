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

export default ({ onChange, onSubmit }) => (
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
                <div className='xop-box xop-image-1'>
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
