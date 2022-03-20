import React, { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const AllMeetupsPage = () => {

   const [isLoading, setIsLoading] = useState(true)
   const [loadedMeetups, setLoadedMeetups] = useState([]);

   useEffect(() => {
      setIsLoading(true)
      fetch('https://react-http-75081-default-rtdb.firebaseio.com/meetups.json'
      ).then(response => {
         return response.json()
      }).then(data => {
         setIsLoading(false);

         const loadedData = []

         for (const key in data) {
            loadedData.push({
               id: key,
               title: data[key].title,
               address: data[key].address,
               image: data[key].image,
               description: data[key].description,
            })
         }

         setLoadedMeetups(loadedData)
      })
   }, [])

   if (isLoading) {
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