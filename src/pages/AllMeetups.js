import React from 'react';
import DUMMY_DATA from '../data/dummy-data'

const AllMeetupsPage = () => {
   return (
      <div>
        <h1>All Meetups</h1>
        <ul>
           {DUMMY_DATA.map((meetup) => {
             return <li key={meetup.id}>{meetup.title}</li>
           })}
        </ul>
      </div>
   );
};

export default AllMeetupsPage;