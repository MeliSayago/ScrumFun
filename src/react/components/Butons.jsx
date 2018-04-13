import React from 'react';

export default function Butons(props) {
  const message = props.active ? 'Pause' : 'Start';
  return (
    <div>
      <button type="button" class="btn btn-primary" onClick={props.toggle}>{message} </button> 
       <button type="button" class="btn btn-danger" onClick={props.reset}>Restart</button>
    </div>
  );
}
