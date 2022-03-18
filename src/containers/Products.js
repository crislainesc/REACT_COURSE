import React, { useContext } from 'react';

import ProductItem from '../components/Products/ProductItem';
import { ProductsContext } from '../context/products-context';
import './Products.css';

const Products = props => {
  const productsContext = useContext(ProductsContext);

  const productList = productsContext.products;

  console.log(productsContext.products)
  return (
    <ul className="products-list">
      {productList.map(product => (
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          isFav={product.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
