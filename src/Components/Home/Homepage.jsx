import React from 'react'
import HeroSection from './HeroSection'
import iPhone from '../../assets/iphone-14-pro.webp'
import mac from '../../assets/mac-system-cut.jfif'
import FeaturedProducts from './FeaturedProducts'

const Homepage = () => {
  return (
    <div>
    <HeroSection 
        title = 'Buy iPhone 14 Pro'
        subtitle = 'Experience the power of the latest iPhone 14 with our most Pro camera ever'
        link ='/product/68dfd00c4c99b2e3e6aa0b35'
        image = {iPhone}
    />
      <FeaturedProducts />
      <HeroSection 
        title = 'Build the ultimate setup'
        subtitle = 'You can add Studio Display and colour-matched Magic accessories to your bag after configure your Mac mini.'
        link ='/product/68dfd00c4c99b2e3e6aa0b3d'
        image = {mac}
    />
    </div>
  )
}

export default Homepage