import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem, ListGroup } from 'react-bootstrap';

export default ({ board }) => (
  <div>
    {console.log('holaaaa', board)}
    <ListGroup>
      {board.map((board, index) => (
        <ListGroupItem key={index}>{board.boardName}</ListGroupItem>
      ))}
    </ListGroup>
  </div>
);
