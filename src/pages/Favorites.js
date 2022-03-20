import React, { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import FavoritesContext from '../store/favorites-context';

const FavoritesPage = () => {

   const favoritesContext = useContext(FavoritesContext);

   let content = <p>You got no favorites yet. Start adding some?</p>;

   if (favoritesContext.totalFavorites > 0) {
      content = <MeetupList meetups={favoritesContext.favorites} />
   }

   return (
      <section>
         <h1>My Favorites</h1>
         {content}
      </section>
   );
};

export default FavoritesPage;