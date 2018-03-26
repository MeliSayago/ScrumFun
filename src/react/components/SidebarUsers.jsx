import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem, ListGroup } from 'react-bootstrap';

export default ({ board }) => (
  <div>
    {console.log('board', board[0])}
    <ListGroup>
      {board.map((user, index) => (
        <ListGroupItem key={index}>{user.name}</ListGroupItem>
      ))}
    </ListGroup>
  </div>
);
