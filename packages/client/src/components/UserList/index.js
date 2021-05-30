
import React from 'react';

const UsersList = ({ users, currentUser, onSelect }) => {
  return (
    <ul>
      {users.map((u) => (
        <li onClick={() => onSelect(u)} key={u}>
          {' '}
          {u}{' '}
        </li>
      ))}
    </ul>
  );
};

export default UsersList;