/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'

const screenWidth = window.innerWidth;
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
function Slider() {
    const [movieList,setMovieList] = useState([])

useEffect(()=>{
    getTrendingMovies()
},[])
    const getTrendingMovies = ()=>{
       GlobalApi.getTrendingVideos.then((resp)=>
       {setMovieList(resp.data.results)
    })
    }

    const elementRef = useRef();

    const sliderRight =(element)=>{
        element.scrollLeft+=screenWidth -110
    }
    const sliderLeft =(element)=>{
        element.scrollLeft-=screenWidth -110
    }

  return (
    <div>
        <HiChevronLeft className='hidden md:block text-white absolute mx-8 mt-[150px] text-[40px] cursor-pointer'
         onClick={()=>sliderLeft(elementRef.current)}/>
        <HiChevronRight className='hidden md:block text-white absolute right-0 mx-8 mt-[150px] text-[40px] cursor-pointer' 
        onClick={()=> sliderRight(elementRef.current)}/>
        <div className='flex overflow-x-auto scroll-smooth w-full px-16 py-4 scrollbar-hide'
         ref={elementRef}>
        {movieList.map((item,index)=>(
            <>
            <img src={IMAGE_BASE_URL+item.backdrop_path} alt=""className=' min-w-full md:h-[310px] object-left-top object-cover mr-5 rounded-md
            hover:border-[4px] border-gray-400 transition-all duration-500 ease-in-out' />
            </>
        )
        )}
        </div>
    </div>
        
  )
}

export default Slider
