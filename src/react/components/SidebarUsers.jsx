import React from 'react';
import './SidebarUsers.css';

import { Badge } from 'react-bootstrap';

export default ({ users, currentUrl, scrumMasters }) => (
  <div className="container">
    <h3>Users:</h3>
    {users.map((user, index) => (
      <Badge className={user.card ? 'backgroundGreen' : 'nothing'} key={index}>
       <h5>{user.name}</h5>
      </Badge>
    ))}
    <br />
    <h3>Scrum Masters:</h3>
    {scrumMasters.map((user, index) => (
      <Badge className={user.card ? 'backgroundGreen' : 'nothing'} key={index}>
        <h5>{user.name}</h5>
      </Badge>
    ))}
  </div>
);
