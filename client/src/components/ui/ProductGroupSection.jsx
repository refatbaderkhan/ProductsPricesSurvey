import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "./carousel"
import ProductGroupCard from './ProductGroupCard'
import {Combobox} from './combobox'
import ClearButton from './ClearButton'


const ProductGroupSection = () => {

  const numbers = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div>
    <div className="product-category-combobox w-full h-20 flex flex-row justify-between justify-items-center pr-20 pl-20 ">
      <div className="flex flex-row justify-between w-2/6 h-1/2 pl-2% pr-2% self-center ">
        <div className="w-2/6">
        <Combobox
          className=" h-full bg-white"
          text="Product Group"
        />
        </div>
        <div className="w-2/6">
        </div>
      </div>
      <div className="flex flex-row justify-between w-2/6 h-1/2 pr-2% self-center ">
      </div>
      <div className="flex flex-row w-1/6 h-1/2 justify-end self-center">
        <ClearButton />
      </div>
    </div>
    <div className="product-category-carousel w-full h-64 pr-20 pl-20">
      <Carousel>
        <CarouselContent>
          {numbers.map((number) => (
            <CarouselItem key={number} className="basis-1/5 pl-12">
              <ProductGroupCard no={number} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    </div>
    </div>
  )
}

export default ProductGroupSection