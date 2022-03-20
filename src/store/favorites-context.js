import { createContext, useState } from "react";

export const FavoritesContext = React.createContext({
   favorites: [],
   totalFavorites: 0
})

const FavoritesContextProvider = (props) => {

   const [userFavorites, setUserFavorites] = useState([])

   const addFavoriteHandler = (favoriteMeetup) => {
      setUserFavorites(prevFavorites => {
         return prevFavorites.concat(favoriteMeetup)
      })
   }

   const removeFavoriteHandler = (meetupID) => {
      setUserFavorites(prevFavorites => {
         prevFavorites.filter(meetup => meetup.id !== meetupID)
      })
   }

   const itemIsFavoriteHandler = (meetupId) => {
      return userFavorites.some(meetup => meetup.id === meetupId);
   }

   const context = {
      favorites: userFavorites,
      totalFavorites: userFavorites.length
   }

   return (
      <FavoritesContext.Provider value={context}>
         {props.children}
      </FavoritesContext.Provider>
   );
};

export default FavoritesContextProvider;


