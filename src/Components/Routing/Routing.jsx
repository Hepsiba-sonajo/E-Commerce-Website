import React, { useContext } from 'react'
import { Routes,Route } from 'react-router-dom'
import Homepage from '../Home/Homepage'
import ProductsPage from '../ProductsPage/ProductsPage'
import SingleProductPage from '../SingleProductPage/SingleProductPage'
import CartPage from '../Cart/CartPage'
import MyOrderPage from '../MyOrder/MyOrderPage'
import LoginPage from '../Authentication/LoginPage'
import SignupPage from '../Authentication/SignupPage'
import Logout from '../Authentication/Logout'
import ProtectedRoute from './protectedRoute'


const Routing = () => {


  return (
    <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/products' element={<ProductsPage/>} />
        <Route path='/product/:id' element={<SingleProductPage  />} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<SignupPage/>} />
        <Route element={<ProtectedRoute />}>
        <Route path='/logout' element={<Logout/>} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/myorders' element={<MyOrderPage/>} />
        </Route>
    </Routes>
  )
}

export default Routing