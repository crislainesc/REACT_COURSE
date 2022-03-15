import React from 'react';
import { Link } from 'react-router-dom';

const MainHeader = () => {
   const styles = {
      background: '#069cc2',
      borderRadius: '6px',
      padding: '15px',
      cursor: 'pointer',
      color: '#fff',
      border: 'none',
      fontSize: '16px',
      margin: '10px'
   }

   return (
      <header>
         <nav>
            <ul>
               <li>
               <Link to="/welcome"><button style={styles}>Welcome</button></Link>
               </li>
               <li>
                  <Link to="/products"><button style={styles}>Products</button></Link>
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default MainHeader;