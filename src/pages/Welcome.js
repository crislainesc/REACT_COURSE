import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Welcome = () => {
   return (
      <section>
         <h1>The Welcome Page</h1>
         <Routes>
            <Route path='/new-user' element={<p>Welcome, new user!</p>} />
            <Route path='/new-users' element={<p>Welcome, new users!</p>} />
         </Routes>
      </section>
   );
};

export default Welcome;