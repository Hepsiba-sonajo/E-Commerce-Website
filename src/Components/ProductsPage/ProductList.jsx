import React, { useState } from 'react'
import './ProductList.css'
import ProductCard from './ProductCard'
import { useEffect } from 'react';
import apiClient from '../../utils/api-client';


const ProductList = () => {

   const [products, setproducts] = useState([]);
   const [error, seterror] = useState("")
 
   useEffect(() => {
      apiClient.get("/products ")
      .then(res =>setproducts(res.data.products))
      .catch(err => seterror(err.message))
   }, [])
   

  return (
    <section className='products_list_section'>
   <header className='align_center products_list_header'>
    <h2>Products</h2>
    <select name='sort' id=''className='products_sorting'>
        <option value="">Relavance</option>  
        <option value="price desc">Price High to Low</option>
        <option value="price asc">Price Loe to High</option>
        <option value="rate desc">Rate High to Low</option>
        <option value="rate asc">Rate Low to High</option>
    </select>
   </header>
   <div className='products_list'>
   {error && <em className='form_error'>{error}</em>}
     {products.map(product => <ProductCard  key={product._id}
                            id={product._id}
                            image={product.images[0]}
                            price={product.price}
                            title={product.title}
                            rating={product.reviews.rate}
                            ratingCounts={product.reviews.counts}
                            stock={product.stock}
                                            />)}
     
   </div>
    </section>
  )
}

export default ProductList