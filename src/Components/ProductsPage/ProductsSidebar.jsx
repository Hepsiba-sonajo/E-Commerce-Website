import React from 'react'
import './ProductsSidebar.css'
import LinkWithIcon from '../Navbar/LinkWithIcon'
import useData from '../../Hooks/useData'

const ProductsSidebar = () => {
    const {data : category, error} =  useData("/category")
   
     
  return (
    <aside className='products_sidebar'>
        <h2>Category</h2>
        <div className='catagory_links'>
        {error && <em className='form_error'>{error}</em>}
        { category && category.map(cat => <LinkWithIcon
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