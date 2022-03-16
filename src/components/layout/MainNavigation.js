import React from 'react';

import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css'

const MainNavigation = () => {
   return (
      <header className={classes.header}>
         <div className={classes.logo}>Great quotes</div>
         <nav className={classes.nav}>
            <ul>
               <li>
                  <NavLink
                     to='/quotes'
                     className={({ isActive }) => isActive ? classes.active : ''}
                  >All Quotes
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to='/new-quote'
                     className={({ isActive }) => isActive ? classes.active : ''}
                  >Add a Quote
                  </NavLink>
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default MainNavigation;