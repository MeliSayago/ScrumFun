import React from 'react';
import './SidebarUsers.css';

import { Badge } from 'react-bootstrap';

export default ({ users, currentUrl, scrumMasters }) => (
  <div>
    <h2>Users</h2>
    {users.map((user, index) => (
      <Badge className={user.card ? 'backgroundGreen' : 'nothing'} key={index}>
        <h5>{user.name}</h5>
      </Badge>
    ))}
    <br />
    <h2>Scrum Masters</h2>
    {scrumMasters.map((user, index) => (
      <Badge className={user.card ? 'backgroundGreen' : 'nothing'} key={index}>
        <h5>{user.name}</h5>
      </Badge>
    ))}
  </div>
);
