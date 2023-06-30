/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import {HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv} from 'react-icons/hi2'
import { HiPlus, HiDotsVertical } from 'react-icons/hi'
import HeaderItems from './HeaderItems'

function Header() {
  const [toggle, setToggle] = useState('false')

  const menu = [
    {
      name: 'Home',
      icon : HiHome,
    },
    {
      name: 'SEARCH',
      icon: HiMagnifyingGlass,
    },
    {
      name: 'WATCH LIST',
      icon: HiPlus,
    },
    {
      name: 'ORIGINALS',
      icon: HiStar,
    },
    {
      name: 'MOVIES',
      icon: HiPlayCircle,
    },
    {
      name: 'SERIES',
      icon: HiTv,
    }
  ]

  return (
    <div className='flex items-center justify-between p-5'>
      <div className='flex items-center gap-8'>
        <img src={logo} className='w-[80px] md:w-[115px] object-cover' alt="Logo" />
        <div className='hidden items-center md:flex gap-8'>
           {
          menu.map((item)=>(
            <HeaderItems name={item.name} Icon={item.icon} />
          ))
        } 
        </div>
        <div className='flex items-center md:hidden gap-5'>
            {
              menu.map((item,index)=>index<3&&(
                <HeaderItems name={''} Icon={item.icon} />
              ))
            } 
          <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
            <HeaderItems name={''} Icon={HiDotsVertical} />
            { toggle? null : <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 py-3 px-5 p-3'>
              {
                menu.map((item,index)=>index>2&&(
                  <HeaderItems  name={item.name} Icon={item.icon} />
                ))
              }
            </div>}
          </div>
        </div>
       
      </div>
      <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" className=' w-[40px] rounded-full' alt="user-image" />
    </div>
  )
}

export default Header
