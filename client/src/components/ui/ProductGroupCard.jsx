import React from 'react'
import ProductGroupImage from '../../assets/ProductGroupImage.jpg'

const ProductGroupCard = ({no}) => {
  return (
    <div className='bg-odooGreen rounded-lg aspect-square p-1.5'>
      <div className='image w-full h-3/4 rounded-lg'>
        <img src={ProductGroupImage} alt='' className=' w-full h-full rounded-lg object-cover' />
      </div>
      <div className='text w-full h-1/4 flex items-center justify-center text-center text-odooOffwhite font-medium text-lg align-middle'>
        Apple
      </div>
    </div>
  )
}

export default ProductGroupCard