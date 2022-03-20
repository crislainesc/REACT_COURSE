import { createContext, useState } from "react";

export const FavoritesContext = React.createContext({
   favorites: [],
   totalFavorites: 0
})

const FavoritesContextProvider = (props) => {

   const [userFavorites, setUserFavorites] = useState([])


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


