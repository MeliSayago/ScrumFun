import React from 'react';

export default function Input(props) {
  return (
    <input
      type="text"
      placeholder="Segundos"
      name="time"
      onChange={e => props.submit(Number(e.target.value) * 100)}
    />
  );
}
