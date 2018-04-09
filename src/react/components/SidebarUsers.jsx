import React from 'react';
import './SidebarUsers.css';

import { Badge } from 'react-bootstrap';

export default ({ users, currentUrl, scrumMasters }) => (
  <div>
    {users.map((user, index) => (
      <Badge className={user.card ? 'backgroundGreen' : 'nothing'} key={index}>
        {user.name}
      </Badge>
    ))}
    <br />
    <p>scrumMasters</p>
    {scrumMasters.map((user, index) => (
      <Badge className={user.card ? 'backgroundGreen' : 'nothing'} key={index}>
        {user.name}
      </Badge>
    ))}
  </div>
);
