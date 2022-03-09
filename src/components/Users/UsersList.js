import React from 'react';

import Card from '../UI/Card';

import classes from './UsersList.module.css'

const UsersList = (props) => {
   return (
      <Card className={classes.users}>
         <ul>
            {props.users.length === 0 && <p>No users in the list</p>}
            {props.users.map((user) => {
               return (
                  <li key={user.id}>
                     {user.name} ({user.age} years old)
                  </li>
               )
            })}
         </ul>
      </Card>
   )
}

export default UsersList;