import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Homepage from '../Home/Homepage'
import ProductsPage from '../ProductsPage/ProductsPage'
import SingleProductPage from '../SingleProductPage/SingleProductPage'
import CartPage from '../Cart/CartPage'
import MyOrderPage from '../MyOrder/MyOrderPage'
import LoginPage from '../Authentication/LoginPage'
import SignupPage from '../Authentication/SignupPage'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/products' element={<ProductsPage/>} />
        <Route path='/product/1' element={<SingleProductPage/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/myorders' element={<MyOrderPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<SignupPage/>} />
    </Routes>
  )
}

export default Routing