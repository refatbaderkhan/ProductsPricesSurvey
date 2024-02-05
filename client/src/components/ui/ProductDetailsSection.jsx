import React from 'react'
import {Combobox} from './combobox'
import ClearButton from './ClearButton'

const ProductDetailsSection = () => {

  return (
    <div className="varieties-section w-full h-20 flex flex-row justify-between justify-items-center pr-20 pl-20  bg-odooGreen">
    <div className="flex flex-row justify-between w-2/6 h-1/2 pl-2% pr-2% self-center ">
      <div className="w-2/6">
        <Combobox
          className=" h-full bg-white" 
          text="Variation"
        />
      </div>
      <div className="w-2/6">
        <Combobox
          className=" h-full bg-white" 
          text="Origin"
        />
      </div>
    </div>
    <div className="flex flex-row justify-between w-2/6 h-1/2 pr-2% self-center ">
      <div className="w-2/6">
      <Combobox
        className=" h-full bg-white"
        text="Size"
      />
      </div>
      <div className="w-2/6">
      <Combobox
        className=" h-full bg-white"
        text="UoM"
      />
      </div>
    </div>
    <div className="flex flex-row w-1/6 h-1/2 justify-end self-center">
      <ClearButton />
    </div>
  </div>
  )
}

export default ProductDetailsSection