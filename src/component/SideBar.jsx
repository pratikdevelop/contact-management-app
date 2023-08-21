import React from 'react'

const SideBar = () => {
  return (
      <>
        <div className="flex  flex-col items-start w-[15vw] h-[90vh] relative bg-gray-900 border-t-2 border-gray-600">
          <span className='text-xl w-full p-6 cursor-pointer border-b-2 border-gray-600 text-white tracking-wide font-bold'> Contacts </span>
          <span className='text-xl w-full p-6 cursor-pointer border-b-2 border-gray-600  text-white tracking-wide font-bold'> charts and map </span>
        </div>
      </>
  )
}

export default SideBar