import React from 'react'
import {Input} from './input'
import {Button} from './button'

const ProductPriceSection = () => {

  return (
  <div className="price-section w-full h-20 flex flex-row justify-between justify-items-center pr-20 pl-20">
    <div className="flex flex-row justify-between w-2/6 h-1/2 pl-2% pr-2% self-center ">
      <div className="w-2/6">
        <Input
          type="number"
          className=" h-full bg-white" 
          placeholder="Price Min"
        />
      </div>
      <div className="w-2/6">
        <Input
          type="number"
          className=" h-full bg-white" 
          placeholder="Price Max"
        />
      </div>
    </div>
    <div className="flex flex-row w-1/6 h-1/2 justify-end self-center">
      <Button type="primary" className="w-2/6 h-5/6 bg-odooRed self-center">
        Submit
      </Button>
    </div>
  </div>
  )
}

export default ProductPriceSection