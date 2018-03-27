import React from 'react';
import './SidebarUsers.css';
import { Link } from 'react-router-dom';
import { ListGroupItem, ListGroup, Badge } from 'react-bootstrap';

export default ({ users }) => (
  <div>
    {users.map((user, index) => <Badge key={index}>{user.name}</Badge>)}
  </div>
);
