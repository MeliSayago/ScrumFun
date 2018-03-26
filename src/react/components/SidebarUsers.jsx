import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem, ListGroup } from 'react-bootstrap';

export default ({ users }) => (
  <div>
    <ListGroup>
      {users.map((user, index) => (
        <ListGroupItem key={index}>{user.name}</ListGroupItem>
      ))}
    </ListGroup>
  </div>
);
