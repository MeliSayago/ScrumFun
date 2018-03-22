import React from 'react';
import './RegisterUser.css';

export default ({ onChange, state, onSubmit }) => {
  return (
    <div className="text-center auth-form mx-auto">
      <form className="form-signin" onSubmit={onSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Register</h1>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          type="text"
          id="name"
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
        <button
          className="btn btn-lg btn-primary btn-block"
          type="submit"
          //disabled={!state.validForm}  desabilitar el boton si no se ingresa nada en el input name
        >
          Register
        </button>
      </form>
    </div>
  );
};
