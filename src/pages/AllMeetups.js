import React from 'react';
import MeetupList from '../components/meetups/MeetupList';
import DUMMY_DATA from '../data/dummy-data'

const AllMeetupsPage = () => {
   return (
      <div>
         <h1>All Meetups</h1>
         <MeetupList meetups={DUMMY_DATA} />
      </div>
   );
};

export default AllMeetupsPage;