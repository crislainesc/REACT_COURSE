import React from 'react';

import FavoriteItem from '../components/Favorites/FavoriteItem';
import { useStore } from '../hooks-store/store';
import './Products.css';

const Favorites = props => {

  const state = useStore()[0];

  const favoriteProducts = state.products.filter(product => product.isFavorite);

  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map(product => (
          <FavoriteItem
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
