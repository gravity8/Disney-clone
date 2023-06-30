/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

function HeaderItems({name, Icon}) {
  return (
    <div className='text-white flex items-center gap-3 text-[18px] font-semibold cursor-pointer duration-300 hover:underline underline-offset-8 mb-3'>
      <Icon />
      <p className=''>{name}</p>
    </div>
  )
}

export default HeaderItems
