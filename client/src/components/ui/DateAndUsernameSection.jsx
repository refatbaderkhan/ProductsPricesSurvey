import React from 'react'
import {Input} from './input'
import {Combobox} from './combobox'
import ClearButton from './ClearButton'

const DateAndUsernameSection = () => {

  return (
    <div className="date-username-section w-full h-20 flex flex-row justify-between justify-items-center pr-20 pl-20 ">
      <div className="flex flex-row justify-between w-2/6 h-1/2 pl-2% pr-2% self-center ">
        <Input type="date" className="w-2/6 h-full bg-white" placeholder="Date" />
        <Input type="number" className="w-2/6 h-full bg-white" placeholder="Week no." />
      </div>
      <div className="flex flex-row justify-between w-2/6 h-1/2 pr-2% self-center ">
        <div className="w-2/6">
          <Combobox
            type="date"
            className=" h-full bg-white"
            text= "Username"
          />
        </div>
        <div className="w-2/6 h-full">
        </div>
      </div>
      <div className="flex flex-row w-1/6 h-1/2 justify-end self-center">
        <ClearButton />
      </div>
    </div>
  )
}

export default DateAndUsernameSection