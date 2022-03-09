import React from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  return (
    <div>
      <AddUser />
      <UsersList users={[{id: 1, name: 'User', age: '31'}]} />
    </div>
  );
}

export default App;
