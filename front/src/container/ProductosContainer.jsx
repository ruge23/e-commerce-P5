import React from 'react';
import axios from 'axios';

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
