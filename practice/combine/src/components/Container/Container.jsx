import React from 'react'

function Container({children}) {
  return (
    <div className='w-full bg-gray-600 px-4 h-full min-h-screen flex justify-center items-center'>{children}</div>
  )
}

export default Container