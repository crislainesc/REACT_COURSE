import React, { useContext } from 'react';

import FavoriteItem from '../components/Favorites/FavoriteItem';
import { ProductsContext } from '../context/products-context';
import './Products.css';

const Favorites = props => {

  const productsContext = useContext(ProductsContext);

  const productsList = productsContext.products;

  const favoriteProducts = productsList.filter(product => product.isFavorite)

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
