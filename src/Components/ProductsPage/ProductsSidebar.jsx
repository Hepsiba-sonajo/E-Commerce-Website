import React from 'react'
import { useState, useEffect } from 'react'
import './ProductsSidebar.css'
import apiClient from '../../utils/api-client'
import rocket from '../../assets/rocket.png'
import LinkWithIcon from '../Navbar/LinkWithIcon'

const ProductsSidebar = () => {

   const [category, setcategory] = useState([]);
     const [error, seterror] = useState("")
   
     useEffect(() => {
        apiClient.get("/category")
        .then(res =>setcategory(res.data))
        .catch(err => seterror(err.message))
     }, [])
     
  return (
    <aside className='products_sidebar'>
        <h2>Category</h2>
        <div className='catagory_links'>
        {error && <em className='form_error'>{error}</em>}
        {category.map(cat => <LinkWithIcon
                            key={cat._id}
                            id={cat._id}
                            title={cat.name}
                            link={`/products?category=${cat.name}`}
                            emoji={`http://localhost:5000/category/${cat.image}`}
                            sidebar={true}
                        /> )}
         
        </div>
    </aside>
  )
}

export default ProductsSidebar