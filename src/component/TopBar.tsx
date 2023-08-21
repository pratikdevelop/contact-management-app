import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { toggleModel } from '../featueres/ToggleSice'
const TopBar = () => {
  const dispatch = useDispatch()

  return (
      <>
        <div className="flex items-center h-[10vh] relative w-full bg-gray-900 px-6">
          <span className='text-xl text-white tracking-wide font-bold'> CONTACT MANAGEMENT APP</span>
          <button onClick={()=>dispatch(toggleModel())} className='px-6  py-1 ml-auto rounded-full bg-blue-800 text-white  font-bold tracking-normal backdrop-hue-rotate-180'> add contact</button>

        </div>
      </>
  )
}

export default TopBar