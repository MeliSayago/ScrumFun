import React from 'react';

export default function Butons(props) {
  const message = props.active ? 'Pause' : 'Start';
  return (
    <div>
      <button onClick={props.toggle}>{message}</button>
      <button onClick={props.reset}>Restart</button>
    </div>
  );
}
