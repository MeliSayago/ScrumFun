import React from 'react';
import './RegisterUser.css';
import {ButtonToolbar,DropdownButton,MenuItem} from 'react-bootstrap'
import Clipboard from 'react-clipboard.js';

export default ({ onChange, state, onSubmit,copyUrl,handleClick }) => {
  return (
    <div className="text-center auth-form mx-auto">
      <form className="form-signin" onSubmit={onSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Register</h1>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          type="text"
          id="myInput"
          name="name"
          className="form-control"
          placeholder="Name"
          required
          onChange={onChange}
        />
        <select value={state.rol} onChange={onChange} name="rol">
          <option>Developer</option>
          <option>Scrum Master</option>
        </select>
        <br/>
        {state.rol == 'Scrum Master' ? 
        <input
          type="email"
          id="myInput"
          name="email"
          className="form-control"
          placeholder="e-mail"
          onChange={onChange}
        /> 
        : <br/>}
        <Clipboard onClick={handleClick} data-clipboard-text={document.getElementById("myInput")}>
          copy Url
        </Clipboard>

        <button
          className="btn btn-lg btn-primary btn-block"
          type="submit"
          disabled={!state}
        >
          Register
        </button>
      </form>
    </div>
  );
};
