import React from 'react';
import Products from '../component/products.jsx';
import data from '../component/data.js'

class ProductosContainer extends React.Component {
  render(){
    return(
        <Products
          data= {data}
        />
    )
  }
};

export default ProductosContainer
