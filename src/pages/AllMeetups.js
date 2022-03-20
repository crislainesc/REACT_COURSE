import React, { useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const AllMeetupsPage = () => {

   const [isLoading, setIsLoading] = useState(true)
   const [loadedMeetups, setLoadedMeetups] = useState([]);

   fetch('https://react-http-75081-default-rtdb.firebaseio.com/meetups.json'
   ).then(response => {
      return response.json()
   }).then(data => {
      setIsLoading(false)
      setLoadedMeetups(data)
   })

   if(isLoading) {
      return <section>
         <p>Loading...</p>
      </section>
   }

   return (
      <div>
         <h1>All Meetups</h1>
         <MeetupList meetups={loadedMeetups} />
      </div>
   );
};

export default AllMeetupsPage;